import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Account, AccountAttributes, OrganizationUnit } from '../src';

let app: App;
let stack: Stack;
describe('AWS Organizations', () => {
  beforeEach(() => {
    app = new App();
    stack = new Stack(app, 'Stack', {
      env: {
        account: '123456789012',
        region: 'eu-west-1',
      },
    });
  });

  it('should create one account', () => {
    new Account(stack, 'Organization', {
      accountName: 'test-account',
      email: 'account@example.com',
    });
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::Organizations::Account', 1);
    template.hasResourceProperties('AWS::Organizations::Account', {
      AccountName: 'test-account',
      Email: 'account@example.com',
    });
  });

  it('should create an account with the default role', () => {
    const account = new Account(stack, 'Organization', {
      accountName: 'test-account',
      email: 'account@example.com',
    });

    expect(account.roleName).toBe('OrganizationAccountAccessRole');
  });

  it('should create an account with custom role', () => {
    const customRoleName = 'custom-role-name';

    const account = new Account(stack, 'Organization', {
      accountName: 'test-account',
      email: 'account@example.com',
      roleName: customRoleName,
    });

    expect(account.roleName).toBe(customRoleName);
  });

  it('should create an account with partent id string', () => {
    new Account(stack, 'Organization', {
      accountName: 'test-account',
      email: 'account@example.com',
      parent: 'o-845749r',
    });

    const template = Template.fromStack(stack);
    // console.log(JSON.stringify(template, null, 2));
    template.resourceCountIs('AWS::Organizations::Account', 1);
    template.hasResourceProperties('AWS::Organizations::Account', {
      AccountName: 'test-account',
      Email: 'account@example.com',
    });
  });

  it('should an account in a given organizational unit', () => {
    const workloadProdOrganizationUnit = new OrganizationUnit(stack, 'Prod', {
      organizationUnitName: 'Prod',
      parent: 'ou-844fj',
    });

    new Account(stack, 'Organization', {
      accountName: 'test-account',
      email: 'account@example.com',
      parent: workloadProdOrganizationUnit,
    });

    const template = Template.fromStack(stack);

    const organizationUnitResource = template.findResources(
      'AWS::Organizations::OrganizationalUnit',
      {
        Properties: {
          Name: 'Prod',
        },
      }
    );
    const organizationUnitLogicalId = Object.keys(organizationUnitResource)[0];

    template.hasResourceProperties('AWS::Organizations::Account', {
      AccountName: 'test-account',
      ParentIds: [
        {
          Ref: organizationUnitLogicalId,
        },
      ],
    });
  });

  it('should import an account from attributes', () => {
    const accountAttributes: AccountAttributes = {
      accountId: '123456789012',
      organizationUnitId: 'ou-8470ddj',
    };
    const account = Account.fromAccountAttributes(
      stack,
      'Account',
      accountAttributes
    );

    expect(account.accountId).toBe(accountAttributes.accountId);
    expect(account.roleName).toBe('OrganizationAccountAccessRole');
    expect(account.accountArn).toBe(
      `arn:aws:organizations::123456789012:account/${accountAttributes.organizationUnitId}/${accountAttributes.accountId}`
    );
  });
});
