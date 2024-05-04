import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  Organization,
  OrganizationUnit,
  OrganizationUnitAttributes,
} from '../src';

let app: App;
let stack: Stack;
let organization: Organization;

describe('AWS Organizations Unit', () => {
  beforeEach(() => {
    app = new App();
    stack = new Stack(app, 'Stack', {
      env: {
        account: '123456789012',
        region: 'eu-west-1',
      },
    });

    organization = new Organization(stack, 'Organization');
  });

  it('should create a new organization unit from parent id', () => {
    new OrganizationUnit(stack, 'OrganizationUnit', {
      organizationUnitName: 'test-org',
      parent: 'r-ifj4j3',
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::Organizations::OrganizationalUnit', 1);
    template.hasResourceProperties('AWS::Organizations::OrganizationalUnit', {
      Name: 'test-org',
      ParentId: 'r-ifj4j3',
    });
  });

  it('should create a new organization unit from a organization construct as parent', () => {
    new OrganizationUnit(stack, 'OrganizationUnit', {
      organizationUnitName: 'test-org',
      parent: organization,
    });

    const template = Template.fromStack(stack);

    const organizationResource = template.findResources(
      'AWS::Organizations::Organization'
    );

    const organizationLogicalId = Object.keys(organizationResource)[0];

    template.resourceCountIs('AWS::Organizations::OrganizationalUnit', 1);
    template.hasResourceProperties('AWS::Organizations::OrganizationalUnit', {
      Name: 'test-org',
      ParentId: {
        'Fn::GetAtt': [organizationLogicalId, 'RootId'],
      },
    });
  });

  it('should create a organization unit from attributes', () => {
    const organizationUnitAttributes: OrganizationUnitAttributes = {
      organizationUnitId: 'ou-84uhd9',
      organizationUnitName: 'test-org',
      organizationUnitArn: 'fakearn',
    };

    const organizationUnit = OrganizationUnit.fromOrganizationUnitAttributes(
      stack,
      'OrganizationUnit',
      organizationUnitAttributes
    );

    expect(organizationUnit.organizationUnitId).toEqual(
      organizationUnitAttributes.organizationUnitId
    );
    expect(organizationUnit.organizationUnitName).toEqual(
      organizationUnitAttributes.organizationUnitName
    );
    expect(organizationUnit.organizationUnitArn).toEqual(
      organizationUnitAttributes.organizationUnitArn
    );
  });

  it('should create an organization unit with other ou as parent', () => {
    const mainOrganizationUnit = new OrganizationUnit(
      stack,
      'MainOrganizationUnit',
      {
        organizationUnitName: 'main-ou',
        parent: organization,
      }
    );

    new OrganizationUnit(stack, 'OrganizationUnitTest', {
      organizationUnitName: 'test',
      parent: mainOrganizationUnit,
    });

    const template = Template.fromStack(stack);

    const organizationUnitResource = template.findResources(
      'AWS::Organizations::OrganizationalUnit',
      {
        Properties: {
          Name: 'main-ou',
        },
      }
    );

    const organizationUnitLogicalId = Object.keys(organizationUnitResource)[0];

    template.resourceCountIs('AWS::Organizations::OrganizationalUnit', 2);

    template.hasResourceProperties('AWS::Organizations::OrganizationalUnit', {
      Name: 'test',
      ParentId: {
        Ref: organizationUnitLogicalId,
      },
    });
  });
});
