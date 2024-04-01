import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  Organization,
  OrganizationAttributes,
  OrganizationFeatureSet,
} from '../src';

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

  it('should create one organization', () => {
    new Organization(stack, 'Organization');
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::Organizations::Organization', 1);
  });

  it('should create an organizations with feature set all', () => {
    new Organization(stack, 'Organization');
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Organizations::Organization', {
      FeatureSet: 'ALL',
    });
  });

  it('should create an organization with Consolidated Bills', () => {
    new Organization(stack, 'Organization', {
      featureSet: OrganizationFeatureSet.CONSOLIDATED_BILLING,
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Organizations::Organization', {
      FeatureSet: OrganizationFeatureSet.CONSOLIDATED_BILLING,
    });
  });

  it('should import an organization from attributes', () => {
    const organizationAttributes: OrganizationAttributes = {
      organizationId: 'o-agnj84t7qk',
      organizationRootId: 'r-rkw8',
      managementAccountId: '123456789012',
    };

    const organization = Organization.fromOrganizationAttributes(
      stack,
      'Organization',
      organizationAttributes
    );
    expect(organization.organizationId).toBe(
      organizationAttributes.organizationId
    );
    expect(organization.organizationRootId).toBe(
      organizationAttributes.organizationRootId
    );
    expect(organization.managementAccountId).toBe(
      organizationAttributes.managementAccountId
    );
    expect(organization.organizationArn).toBe(
      'arn:aws:organizations:eu-west-1:123456789012:organization/o-agnj84t7qk'
    );
  });
});
