import { CfnTag, IResource, RemovalPolicy, Resource } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnPolicy } from 'aws-cdk-lib/aws-organizations';
import { Construct } from 'constructs';

/**
 * The type of policy to create.
 */
export enum OrganizationPolicyType {
  /**
   * Service control policies (SCPs) enable central administration over the maximum permissions
   * that identities (users and roles) within accounts in your organization can have.
   * This helps ensure that your identities stay within your organization’s access control guidelines
   *
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html?icmpid=docs_orgs_console
   */
  SERVICE_CONTROL_POLICY = 'SERVICE_CONTROL_POLICY',

  /**
   * Backup policies enable you to deploy organization-wide backup plans
   * to help ensure compliance across your organization's accounts.
   * Using policies helps ensure consistency in how you implement your backup plans.
   *
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html?icmpid=docs_orgs_console
   */
  BACKUP_POLICY = 'BACKUP_POLICY',

  /**
   * Tag policies help you standardize tags on all tagged resources across your organization.
   * You can use tag policies to define tag keys (including how they should be capitalized)
   * and their allowed values
   *
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html
   */
  TAG_POLICY = 'TAG_POLICY',

  /**
   * Artificial Intelligence (AI) services opt-out policies enable you
   * to control whether AWS AI services can store and use your content.
   *
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html?icmpid=docs_orgs_console
   */
  AISERVICES_OPT_OUT_POLICY = 'AISERVICES_OPT_OUT_POLICY',
}

export interface IOrganizationPolicy extends IResource {
  /**
   * Returns the unique identifier (ID) of the policy
   */
  readonly organizationPolicyId: string;

  /**
   * Returns the Amazon Resource Name (ARN) of the policy
   */
  readonly organizationPolicyArn: string;

  /**
   * List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.
   */
  readonly targetIds?: string[];
}

export abstract class OrganzationPolicyBase
  extends Resource
  implements IOrganizationPolicy
{
  public abstract readonly organizationPolicyId: string;
  public abstract readonly organizationPolicyArn: string;

  public abstract readonly targetIds: string[];
}

export interface ServiceControlPolicyProps {
  /**
   * The name of the policy.
   */
  readonly name: string;

  /**
   * The description of the policy.
   */
  readonly description: string;

  /**
   * Represents a statement in an IAM policy document.
   */
  readonly statements: PolicyStatement[];

  /**
   * List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.
   */
  readonly targetIds?: string[];

  /**
   * A list of tags that you want to attach to the newly created policy.
   */
  readonly tags?: CfnTag[];

  /**
   * The policy to apply when the policy is removed from the organization.
   *
   * @default RemovalPolicy.RETAIN
   */
  readonly removalPolicy?: RemovalPolicy;
}

/**
 * Creates a policy of a specified type that you can attach to a root,
 * an organizational unit (OU), or an individual AWS account
 */
export class ServiceControlPolicy extends OrganzationPolicyBase {
  public readonly organizationPolicyId: string;
  public readonly organizationPolicyArn: string;
  public readonly targetIds: string[] = [];

  private statements: PolicyStatement[];
  private resource: CfnPolicy;

  /**
   * @param {Construct} scope
   * @param {string} id
   */
  constructor(scope: Construct, id: string, props: ServiceControlPolicyProps) {
    super(scope, id);

    this.statements = props.statements;

    if (props.targetIds) {
      props.targetIds.forEach((targetId) => this.targetIds.push(targetId));
    }

    const content = {
      Version: '2012-10-17',
      Statement: this.statements.map((statement) => statement.toJSON()),
    };

    this.resource = new CfnPolicy(this, 'Policy', {
      name: props.name,
      description: props.description,
      type: OrganizationPolicyType.SERVICE_CONTROL_POLICY,
      content: content,
      targetIds: this.targetIds.length == 0 ? undefined : this.targetIds,
      tags: props.tags || undefined,
    });

    if (props.removalPolicy) {
      this.resource.applyRemovalPolicy(props.removalPolicy);
    } else {
      this.resource.applyRemovalPolicy(RemovalPolicy.RETAIN);
    }

    this.organizationPolicyId = this.resource.ref;
    this.organizationPolicyArn = this.resource.attrArn;
  }

  /**
   * Add a target which will be applied this Policy. It must be a unique identifiers (IDs) of the root, OU,
   * or account that you want to attach the policy to.
   */
  public addTarget(target: string): void {
    this.targetIds.push(target);
    this.resource.targetIds = this.targetIds;
  }
}
