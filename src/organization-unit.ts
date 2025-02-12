import { IResource, Resource } from 'aws-cdk-lib';
import { CfnOrganizationalUnit } from 'aws-cdk-lib/aws-organizations';
import { Construct } from 'constructs';
import { IOrganization, Organization } from './organization';

export interface OrganizationUnitAttributes {
  /**
   * The unique identifier (ID) associated with this OU
   */
  readonly organizationUnitId: string;

  /**
   * The name of the OU
   */
  readonly organizationUnitName: string;

  /**
   * The Amazon Resource Name (ARN) of this OU
   */
  readonly organizationUnitArn: string;
}

export interface IOrganizationUnits extends IResource {
  /**
   * The unique identifier (ID) associated with this OU
   */
  readonly organizationUnitId: string;

  /**
   * The name of the OU
   */
  readonly organizationUnitName: string;

  /**
   * The Amazon Resource Name (ARN) of this OU
   */
  readonly organizationUnitArn: string;
}

export abstract class OrganizationUnitBase
  extends Resource
  implements IOrganizationUnits
{
  public abstract readonly organizationUnitArn: string;

  public abstract readonly organizationUnitId: string;

  public abstract readonly organizationUnitName: string;
}

/**
 * Organization Unit Properties
 */
export interface IOrganizationUnitProps {
  /**
   * The name of the OU
   */
  readonly organizationUnitName: string;

  /**
   * The unique identifier (ID) of the parent root
   * or OU that you want to create the new OU in.
   */
  readonly parent: string | IOrganization | OrganizationUnit;
}

/**
 * Create a new Organization Unit
 *
 * @example
 * new OrganizationUnit(this, 'OU', {
 *   organizationUnitName: 'OU',
 *   parent: 'r-123456789',
 * });
 */
export class OrganizationUnit extends OrganizationUnitBase {
  public static fromOrganizationUnitAttributes(
    scope: Construct,
    id: string,
    attrs: OrganizationUnitAttributes
  ): OrganizationUnitBase {
    class Import extends OrganizationUnitBase {
      public readonly organizationUnitId = attrs.organizationUnitId;
      public readonly organizationUnitName = attrs.organizationUnitName;
      public readonly organizationUnitArn = attrs.organizationUnitArn;
    }
    return new Import(scope, id);
  }
  /**
   * The ARN of the OU
   */
  readonly organizationUnitArn: string;

  /**
   * The ID of the OU
   */
  readonly organizationUnitId: string;

  /**
   * The Organization Unit name
   */
  readonly organizationUnitName: string;

  private resource: CfnOrganizationalUnit;

  private parentId: string = '';

  constructor(scope: Construct, id: string, props: IOrganizationUnitProps) {
    super(scope, id);

    if (typeof props.parent === 'string') {
      this.parentId = props.parent;
    }

    if (props.parent instanceof Organization) {
      this.parentId = props.parent.organizationRootId;
    }

    if (props.parent instanceof OrganizationUnit) {
      this.parentId = props.parent.organizationUnitId;
    }

    this.resource = new CfnOrganizationalUnit(this, 'OrganizationalUnit', {
      name: props.organizationUnitName,
      parentId: this.parentId,
    });

    this.organizationUnitArn = this.resource.attrArn;
    this.organizationUnitId = this.resource.ref;
    this.organizationUnitName = this.resource.name;
  }
}
