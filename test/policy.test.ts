import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { OrganizationPolicyType, ServiceControlPolicy } from '../src';

let app: App;
let stack: Stack;

describe('Service Control Policy', () => {
  beforeEach(() => {
    app = new App();
    stack = new Stack(app, 'Stack', {
      env: {
        account: '123456789012',
        region: 'eu-west-1',
      },
    });
  });

  it('should create an SCP without target', () => {
    const policy = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['s3:*'],
      resources: ['*'],
    });

    new ServiceControlPolicy(stack, 'ServiceControlPolicy', {
      name: 'test-policy',
      description: 'test policy',
      statements: [policy],
    });
    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::Organizations::Policy', 1);

    template.hasResourceProperties('AWS::Organizations::Policy', {
      Type: OrganizationPolicyType.SERVICE_CONTROL_POLICY,
      Content: Match.objectEquals({
        Version: Match.anyValue(),
        Statement: Match.arrayWith([Match.objectEquals(policy.toJSON())]),
      }),
      TargetIds: Match.absent(),
    });
  });

  it('should create an SCP with target', () => {
    const policy = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['s3:*'],
      resources: ['*'],
    });

    new ServiceControlPolicy(stack, 'ServiceControlPolicy', {
      name: 'test-policy',
      description: 'test policy',
      statements: [policy],
      targetIds: ['o-123456789012'],
    });
    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::Organizations::Policy', 1);

    template.hasResourceProperties('AWS::Organizations::Policy', {
      Type: OrganizationPolicyType.SERVICE_CONTROL_POLICY,
      Content: Match.objectEquals({
        Version: Match.anyValue(),
        Statement: Match.arrayWith([Match.objectEquals(policy.toJSON())]),
      }),
      TargetIds: Match.arrayWith(['o-123456789012']),
    });
  });

  it('should create an SCP with multiple targets', () => {
    const policy = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['s3:*'],
      resources: ['*'],
    });

    new ServiceControlPolicy(stack, 'ServiceControlPolicy', {
      name: 'test-policy',
      description: 'test policy',
      statements: [policy],
      targetIds: ['o-123456789012', 'o-123456789013'],
    });
    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::Organizations::Policy', 1);

    template.hasResourceProperties('AWS::Organizations::Policy', {
      Type: OrganizationPolicyType.SERVICE_CONTROL_POLICY,
      Content: Match.objectEquals({
        Version: Match.anyValue(),
        Statement: Match.arrayWith([Match.objectEquals(policy.toJSON())]),
      }),
      TargetIds: Match.arrayWith(['o-123456789012', 'o-123456789013']),
    });
  });

  it('shoud add target by method', () => {
    const serviceControlPolicy = new ServiceControlPolicy(
      stack,
      'ServiceControlPolicy',
      {
        name: 'test-policy',
        description: 'test policy',
        statements: [
          new PolicyStatement({
            effect: Effect.ALLOW,
            actions: ['s3:*'],
            resources: ['*'],
          }),
        ],
      }
    );

    serviceControlPolicy.addTarget('o-123456789012');
    serviceControlPolicy.addTarget('o-123456789013');

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::Organizations::Policy', 1);

    template.hasResourceProperties('AWS::Organizations::Policy', {
      Type: OrganizationPolicyType.SERVICE_CONTROL_POLICY,
      TargetIds: Match.arrayWith(['o-123456789012', 'o-123456789013']),
    });
  });

  it('should update the removal policy', () => {
    const policy = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['s3:*'],
      resources: ['*'],
    });

    new ServiceControlPolicy(stack, 'ServiceControlPolicy', {
      name: 'test-policy',
      description: 'test policy',
      statements: [policy],
      removalPolicy: RemovalPolicy.DESTROY,
    });
    const template = Template.fromStack(stack);

    template.hasResource('AWS::Organizations::Policy', {
      DeletionPolicy: 'Delete',
      UpdateReplacePolicy: 'Delete',
    });
  });
});
