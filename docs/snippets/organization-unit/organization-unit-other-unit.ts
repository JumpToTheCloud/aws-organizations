import { Construct } from 'constructs';
import { Organization, OrganizationUnit } from '@jttc/aws-organizations';

export class OrganizationStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const organization = new Organization(this, 'Organization');

    const workloadsOrganizationUnit = new OrganizationUnit(
      this,
      'WorkloadsOrganizationUnit',
      {
        organizationUnitName: 'workloads',
        parent: organization,
      }
    );

    new OrganizationUnit(this, 'ProdOrganizationUnit', {
      organizationUnitName: 'Prod',
      parent: workloadsOrganizationUnit,
    });
  }
}
