import {
  Annotations,
  Arn,
  ArnFormat,
  IResource,
  Resource,
  Stack,
} from 'aws-cdk-lib';
import { CfnOrganization } from 'aws-cdk-lib/aws-organizations';
import { Construct } from 'constructs';

/**
 * Specifies the feature set supported by the new organization.
 * Each feature set supports different levels of functionality.
 */
export enum OrganizationFeatureSet {
  /**
   * In addition to all the features supported by the consolidated billing feature set,
   * the management account gains access to advanced features that give you more control
   * over accounts in your organization.
   *
   * By default or if you set the FeatureSet property to ALL, the new organization is created
   * with all features enabled and service control policies automatically enabled in the root.
   */
  ALL = 'ALL',

  /**
   * All member accounts have their bills consolidated to and paid by the management account
   */
  CONSOLIDATED_BILLING = 'CONSOLIDATED_BILLING',
}

export interface OrganizationAttributes {
  /**
   * The unique identifier (ID) of the organization.
   */
  readonly organizationId: string;

  /**
   * The unique identifier (ID) of the organization root.
   */
  readonly organizationRootId: string;

  /**
   * The unique identifier (ID) of the management account of an organization.
   */
  readonly managementAccountId: string;
}

export interface IOrganization extends IResource {
  /**
   * The unique identifier (ID) of the organization.
   */
  readonly organizationId: string;

  /**
   * The unique identifier (ID) of the organization root.
   */
  readonly organizationRootId: string;

  /**
   * The unique identifier (ID) of the management account of an organization.
   */
  readonly managementAccountId: string;

  /**
   * The Amazon Resource Name (ARN) of the organization.
   */
  readonly organizationArn: string;
}

export abstract class OrganizationBase
  extends Resource
  implements IOrganization
{
  public abstract readonly organizationArn: string;

  public abstract readonly organizationId: string;

  public abstract readonly organizationRootId: string;

  public abstract readonly managementAccountId: string;
}

export interface OrganizationProps {
  /**
   * Specifies the feature set supported by the new organization.
   *
   * @default OrganizationFeatureSet.ALL
   */
  readonly featureSet?: OrganizationFeatureSet;
}

/**
 * Create a new organization
 * @example
 *    new Organization(this, 'Organization');
 */
export class Organization extends OrganizationBase {
  /**
   * Import a Organization from attributes
   * @example
   *    Organization.fromOrganizationAttributes(this, 'Organization', {
   *      organizationId: 'o-xxxx',
   *      organizationRootId: 'r-xxxx',
   *      managementAccountId: 'xxxx',
   *    });
   */
  public static fromOrganizationAttributes(
    scope: Construct,
    id: string,
    attributes: OrganizationAttributes
  ): IOrganization {
    class Import extends OrganizationBase {
      public organizationId = attributes.organizationId;
      public organizationArn = Arn.format({
        partition: 'aws',
        region: Stack.of(this).region,
        service: 'organizations',
        account: attributes.managementAccountId,
        resource: 'organization',
        resourceName: attributes.organizationId,
      });
      public organizationRootId = attributes.organizationRootId;
      public managementAccountId = attributes.managementAccountId;
    }

    return new Import(scope, id);
  }

  /**
   * Import a Organization from arn
   * @example
   *    Organization.fromOrganizationArn(this, 'Organization', 'arn:aws:organizations::123456789012:root/o-agnj84t7qk/r-m7g5');
   */
  public static fromOrganizationArn(
    scope: Construct,
    id: string,
    organizationArn: string
  ): IOrganization {
    arnValidation(organizationArn);
    class Import extends OrganizationBase {
      public organizationArn = organizationArn;
      public organizationId = '';
      public organizationRootId = '';
      public managementAccountId = '';

      constructor() {
        super(scope, id);

        const arnComponents = Arn.split(
          organizationArn,
          ArnFormat.SLASH_RESOURCE_NAME
        );
        if (arnComponents.resourceName) {
          const organizationId = arnComponents.resourceName.split('/')[0];
          this.organizationId = organizationId;
        }
        if (arnComponents.resourceName) {
          const organizationRootId = arnComponents.resourceName.split('/')[1];
          this.organizationRootId = organizationRootId;
        }
        if (arnComponents.account) {
          this.managementAccountId = arnComponents.account;
        }
      }
    }

    return new Import();

    function arnValidation(arn: string) {
      const arnComponents = Arn.split(arn, ArnFormat.SLASH_RESOURCE_NAME);
      if (arnComponents.service !== 'organizations') {
        Annotations.of(scope).addError(
          `Invalid service: ${arn}. We expect "organizations" and we receive "${arnComponents.service}"`
        );
      }
      if (arnComponents.resource !== 'root') {
        Annotations.of(scope).addError(
          `Invalid resource: ${arn}. We expect "root" and we receive "${arnComponents.resource}"`
        );
      }
      if (
        arnComponents.resourceName &&
        !arnComponents.resourceName.split('/')[0].startsWith('o-')
      ) {
        Annotations.of(scope).addError(
          `Invalid organization id: ${arn}. It should start with "o-" but we recieve "${arnComponents.resourceName.split('/')[0]}"`
        );
      }
      if (
        arnComponents.resourceName &&
        !arnComponents.resourceName.split('/')[1].startsWith('r-')
      ) {
        Annotations.of(scope).addError(
          `Invalid root id: ${arn}. It should start with "r-" but we recieve "${arnComponents.resourceName.split('/')[1]}"`
        );
      }
      return true;
    }
  }

  readonly organizationId: string;

  readonly organizationArn: string;

  readonly organizationRootId: string;

  readonly managementAccountId: string;

  private resource: CfnOrganization;
  /**
   * @param {Construct} scope
   * @param {string} id
   */
  constructor(scope: Construct, id: string, props?: OrganizationProps) {
    super(scope, id);

    this.resource = new CfnOrganization(this, 'Organization', {
      featureSet: props?.featureSet || OrganizationFeatureSet.ALL,
    });

    this.organizationId = this.resource.ref;
    this.organizationArn = this.resource.attrArn;
    this.organizationRootId = this.resource.attrRootId;
    this.managementAccountId = this.resource.attrManagementAccountId;
  }
}
