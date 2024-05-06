import {
  Arn,
  IResource,
  RemovalPolicy,
  Resource,
  Stack,
  Tag,
} from 'aws-cdk-lib';
import { CfnAccount } from 'aws-cdk-lib/aws-organizations';
import { Construct } from 'constructs';
import { OrganizationUnit } from './organization-unit';

export interface AccountAttributes {
  /**
   * The account id created
   */
  readonly accountId: string;

  /**
   * The Organization Unit Id ou-xxxxxx
   */
  readonly organizationUnitId: string;

  /**
   * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.
   */
  readonly roleName?: string;
}

export interface IAccount extends IResource {
  /**
   * The account id created
   */
  readonly accountId: string;

  /**
   * The Arn of the created account
   */
  readonly accountArn: string;

  /**
   * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.
   */
  readonly roleName: string;
}

export abstract class AccountBase extends Resource implements IAccount {
  public abstract readonly accountId: string;

  public abstract readonly accountArn: string;

  public abstract readonly roleName: string;
}

export interface AccountProps {
  /**
   * The account name given to the account when it was created
   */
  readonly accountName: string;

  /**
   * The email address associated with the AWS account.
   */
  readonly email: string;

  /**
   * The unique identifier (ID) of the root or organizational unit (OU)
   * that you want to create the new account in.
   *
   * If you don't specify this parameter, the ParentId defaults to the root ID.
   */
  readonly parent?: string | OrganizationUnit;

  /**
   * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.
   *
   * This role trusts the management account, allowing users in the management account to assume the role,
   * as permitted by the management account administrator.
   *
   * The role has administrator permissions in the new member account.
   *
   * If you don't specify this parameter, the role name defaults to OrganizationAccountAccessRole.
   *
   * For more information about how to use this role to access the member account, see the following links:
   * - Creating the OrganizationAccountAccessRole in an invited member account in the AWS Organizations User Guide @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role
   * - Steps 2 and 3 in IAM Tutorial: Delegate access across AWS accounts using IAM roles in the IAM User Guide @see https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html
   */
  readonly roleName?: string;

  /**
   * A list of tags that you want to attach to the newly created account.
   *
   * For each tag in the list, you must specify both a tag key and a value.
   * You can set the value to an empty string, but you can't set it to null
   */
  readonly tags?: Tag[];
}

/**
 * Create a new AWS Account
 */
export class Account extends AccountBase {
  /**
   * Import a Organization
   * @example
   *    Organization.fromOrganizationAttributes(this, 'Organization', {
   *      organizationId: 'o-xxxx',
   *      organizationRootId: 'r-xxxx',
   *      managementAccountId: 'xxxx',
   *    });
   */
  public static fromAccountAttributes(
    scope: Construct,
    id: string,
    attributes: AccountAttributes
  ): AccountBase {
    class Import extends AccountBase {
      public accountId = attributes.accountId;

      public accountArn = Arn.format({
        partition: 'aws',
        region: Stack.of(this).region,
        service: 'organizations',
        account: Stack.of(this).account,
        resource: attributes.organizationUnitId,
        resourceName: attributes.accountId,
      });

      public roleName = attributes.roleName || 'OrganizationAccountAccessRole';
    }

    return new Import(scope, id);
  }
  /**
   * The account id created
   */
  readonly accountId: string;

  /**
   * The Arn of the created account
   */
  readonly accountArn: string;

  /**
   * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.
   */
  readonly roleName: string;

  private parentId: string = '';

  private resource: CfnAccount;
  /**
   * @param {Construct} scope
   * @param {string} id
   */
  constructor(scope: Construct, id: string, props: AccountProps) {
    super(scope, id);

    if (typeof props.parent === 'string') {
      this.parentId = props.parent;
    }

    if (props.parent instanceof OrganizationUnit) {
      this.parentId = props.parent.organizationUnitId;
    }

    this.resource = new CfnAccount(this, 'Account', {
      accountName: props.accountName,
      email: props.email,
      parentIds: props.parent ? [this.parentId] : undefined,
      roleName: props.roleName || undefined,
      tags: props.tags || undefined,
    });

    this.resource.applyRemovalPolicy(RemovalPolicy.RETAIN);

    this.accountId = this.resource.attrAccountId;
    this.accountArn = this.resource.attrArn;
    this.roleName = this.resource.roleName || 'OrganizationAccountAccessRole';
  }
}
