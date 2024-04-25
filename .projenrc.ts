import { ReleasableCommits, awscdk } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { TrailingComma } from 'projen/lib/javascript';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Jump to the Cloud',
  authorAddress: 'antonio.marquez@jumptothecloud.tech',
  cdkVersion: '2.120.0',
  constructsVersion: '10.3.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: '@jttc/aws-organizations',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:JumpToTheCloud/caws-organizations.git',
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
  mergify: false,
  release: true,
  jestOptions: {
    jestConfig: {
      verbose: true,
    },
  },
  githubOptions: {
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
  prerelease: 'alpha',
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['commitizen', 'cz-customizable'],
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addScripts({
  commit: './node_modules/cz-customizable/standalone.js',
});

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
      uses: 'actions/setup-python@v4',
      with: {
        pythonVersion: '3.8',
      },
    },
    {
      run: 'echo "cache_id=$(date --utc "+%V")" >> $GITHUB_ENV',
    },
    {
      uses: 'actions/cache@v3',
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
        'mike deploy --version ${{ env.VERSION }} --alias ${{ env.ALIAS }}',
        'mike set-default --push ${{ env.ALIAS }}',
      ].join('\n'),
    },
  ],
});

project.synth();
