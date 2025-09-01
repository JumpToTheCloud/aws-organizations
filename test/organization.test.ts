/**
 * Tests Organization
 *
 * @group unit
 */
import { App, Stack } from 'aws-cdk-lib';
import { Template, Annotations } from 'aws-cdk-lib/assertions';
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

  it('should import an organization from arn', () => {
    const organization = Organization.fromOrganizationArn(
      stack,
      'Organization',
      'arn:aws:organizations::123456789012:root/o-agnj84t7qk/r-m7g5'
    );

    expect(organization.organizationId).toBe('o-agnj84t7qk');
    expect(organization.organizationRootId).toBe('r-m7g5');
    expect(organization.managementAccountId).toBe('123456789012');
    expect(organization.organizationArn).toBe(
      'arn:aws:organizations::123456789012:root/o-agnj84t7qk/r-m7g5'
    );
  });

  it('should throw an error with organization service is wrong in arn', () => {
    const wrongArn =
      'arn:aws:organizati::123456789012:root/o-agnj84t7qk/r-m7g5';
    Organization.fromOrganizationArn(stack, 'Organization', wrongArn);

    const annotations = Annotations.fromStack(stack);
    annotations.hasError(
      '*',
      `Invalid service: ${wrongArn}. We expect "organizations" and we receive "organizati"`
    );
  });

  it('should throw an error with wrong resource', () => {
    const wrongArn =
      'arn:aws:organizations::123456789012:xxxx/o-agnj84t7qk/r-m7g5';
    Organization.fromOrganizationArn(stack, 'Organization', wrongArn);

    const annotations = Annotations.fromStack(stack);
    annotations.hasError(
      '*',
      `Invalid resource: ${wrongArn}. We expect "root" and we receive "xxxx"`
    );
  });

  it('should throw an error with wrong organization id', () => {
    const wrongArn =
      'arn:aws:organizations::123456789012:root/u-agnj84t7qk/r-m7g5';
    Organization.fromOrganizationArn(stack, 'Organization', wrongArn);

    const annotations = Annotations.fromStack(stack);
    annotations.hasError(
      '*',
      `Invalid organization id: ${wrongArn}. It should start with "o-" but we recieve "u-agnj84t7qk"`
    );
  });

  it('should throw an error with wrong root id', () => {
    const wrongArn =
      'arn:aws:organizations::123456789012:root/o-agnj84t7qk/k-m7g5';
    Organization.fromOrganizationArn(stack, 'Organization', wrongArn);

    const annotations = Annotations.fromStack(stack);
    annotations.hasError(
      '*',
      `Invalid root id: ${wrongArn}. It should start with "r-" but we recieve "k-m7g5"`
    );
  });

  it('should add organization unit', () => {
    const organization = new Organization(stack, 'Organization', {
      featureSet: OrganizationFeatureSet.CONSOLIDATED_BILLING,
    });

    organization.addOrganizationUnit('Test');

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Organizations::OrganizationalUnit', {
      Name: 'Test',
    });
  });
});
