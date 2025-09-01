import { ReleasableCommits, TextFile, awscdk, JsonFile } from 'projen';
import { GithubCredentials } from 'projen/lib/github';
import {
  AppPermission,
  JobPermission,
} from 'projen/lib/github/workflows-model';
import { TrailingComma } from 'projen/lib/javascript';
import { ReleaseTrigger } from 'projen/lib/release';
import { VsCode } from 'projen/lib/vscode';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Jump to the Cloud',
  authorAddress: 'antonio.marquez@jumptothecloud.tech',
  cdkVersion: '2.173.0',
  constructsVersion: '10.4.2',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  projenVersion: '0.95.5',
  name: '@jttc/aws-organizations',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:JumpToTheCloud/aws-organizations.git',
  keywords: ['aws', 'cdk', 'organizations'],
  prettier: true,
  prettierOptions: {
    settings: {
      trailingComma: TrailingComma.ES5,
      singleQuote: true,
      bracketSpacing: true,
      semi: true,
    },
  },
  autoMerge: false,
  mergify: false,
  release: true,
  releaseTrigger: ReleaseTrigger.workflowDispatch(),
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  jestOptions: {
    jestConfig: {
      verbose: true,
    },
  },
  githubOptions: {
    projenCredentials: GithubCredentials.fromApp({
      permissions: {
        pullRequests: AppPermission.WRITE,
        contents: AppPermission.WRITE,
      },
    }),
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: [
          'feat',
          'fix',
          'chore',
          'docs',
          'style',
          'refactor',
          'test',
          'revert',
          'ci',
        ],
      },
    },
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    'husky',
    'lint-staged',
    'commitizen',
    'cz-customizable',
    'jest-runner-groups',
    'jest-runner',
    'jest-docblock',
  ],
  packageName: '@jttc/aws-organizations',
});

project.addTask('commit', {
  description:
    'Commit changes with conventional commits prompts provided by Commitizen',
  steps: [
    {
      exec: './node_modules/cz-customizable/standalone.js',
      receiveArgs: false,
      say: 'committing changes',
    },
  ],
});

project.addTask('prepare', {
  description: 'Init husky',
  steps: [
    {
      exec: 'husky',
      say: 'Preparing husky',
    },
  ],
});

project.addTask('lint-staged', {
  description: 'Lint Staged files',
  receiveArgs: true,
  steps: [
    {
      exec: 'lint-staged',
    },
  ],
});

project.addTask('prettier', {
  description: 'Format files with Prettier',
  receiveArgs: true,
  exec: 'prettier',
});

new JsonFile(project, '.lintstagedrc', {
  obj: {
    '*.ts': ['prettier --check', 'yarn eslint'],
    '*.md': 'prettier --check',
  },
});

const unitTest = project.addTask('test:unit', {
  description: 'Unit Tests',
  steps: [
    {
      exec: 'jest --group=unit',
      say: 'Unit Tests',
      receiveArgs: true,
    },
  ],
});

project.addTask('test:snapshot', {
  description: 'Snapshots Tests',
  steps: [
    {
      exec: 'jest --group=snapshot --collectCoverage=false',
      say: 'Snapshots Tests',
      receiveArgs: true,
    },
  ],
});

project.addTask('test:snapshot:update', {
  description: 'Update snapshots',
  steps: [
    {
      exec: 'jest --updateSnapshot --collectCoverage=false',
      say: 'Updating snapshots',
      receiveArgs: true,
    },
  ],
});

const testTask = project.tasks.tryFind('test');
const eslintTask = project.tasks.tryFind('eslint');

if (testTask && eslintTask) {
  testTask.reset();
  testTask.spawn(unitTest);
  testTask.spawn(eslintTask);
}

project.addGitIgnore('site');

project.prettier?.addIgnorePattern('*.md');

project.addTask('docs:build', {
  exec: 'mkdocs build',
});

project.addTask('docs:serve', {
  exec: 'mkdocs serve -a localhost:8099',
});

const deployDocs = project.github?.addWorkflow('deploy-docs');
deployDocs?.on({
  workflowDispatch: {},
  workflowRun: {
    workflows: ['release'],
    types: ['completed'],
  },
  workflowCall: {
    inputs: {
      version: {
        required: false,
        type: 'string',
        description: 'Version to build and publish docs',
      },
      alias: {
        required: false,
        type: 'string',
        description: 'Alias to associate version (latest, stage)',
      },
    },
  },
});

deployDocs?.addJob('deploy-docs', {
  permissions: {
    contents: JobPermission.WRITE,
    pages: JobPermission.WRITE,
  },
  runsOn: ['ubuntu-latest'],
  outputs: {
    getVersion: {
      stepId: 'getVersion',
      outputName: 'version',
    },
  },
  steps: [
    {
      uses: 'actions/checkout@v4',
      with: {
        'fetch-depth': 0,
      },
    },
    {
      uses: 'actions/setup-python@v5',
      with: {
        ['python-version']: '3.10',
      },
    },
    {
      run: 'echo "cache_id=$(date --utc "+%V")" >> $GITHUB_ENV',
    },
    {
      uses: 'actions/cache@v4',
      with: {
        key: 'mkdocs-material-${{ env.cache_id }}',
        path: '.cache',
      },
    },
    {
      name: 'Install doc generations dependencies',
      run: [
        'pip install --upgrade pip',
        'pip install -r docs/requirements.txt',
        'pip install mkdocs-material',
        'pip install mike',
      ].join('\n'),
    },
    {
      name: 'Setup docs deploy',
      run: [
        'git config user.name github-actions',
        'git config user.email github-actions@github.com',
      ].join('\n'),
    },
    {
      name: 'Get the version',
      id: 'getVersion',
      run: [
        'echo "version=$(git describe --tags --abbrev=0)"',
        'echo "version=$(git describe --tags --abbrev=0)" >> "$GITHUB_OUTPUT"',
      ].join('\n'),
    },
    {
      name: 'Build and deploy documentation',
      env: {
        ALIAS: 'latest',
        VERSION: '${{ steps.getVersion.outputs.version }}',
      },
      run: [
        'echo ${{ env.VERSION }}',
        'mike deploy --push --update-aliases ${{ env.VERSION }} ${{ env.ALIAS }}',
        'mike set-default --push ${{ env.ALIAS }}',
      ].join('\n'),
    },
  ],
});

new TextFile(project, '.nvmrc', {
  lines: ['v20.18.2'],
});

const vscode = new VsCode(project);
vscode.settings.addSettings({
  'editor.formatOnSave': true,
  'editor.indentSize': 2,
  'editor.defaultFormatter': 'esbenp.prettier-vscode',
});

project.synth();
