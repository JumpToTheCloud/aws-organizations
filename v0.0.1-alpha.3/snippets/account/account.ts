import { Construct } from 'constructs';
import {
  Organization,
  OrganizationUnit,
  Account,
} from '@jttc/aws-organizations';

export class OrganizationStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const organization = new Organization(this, 'Organization');

    const workloadOrganizationUnit = new OrganizationUnit(
      this,
      'WorkloadsOrganizationUnit',
      {
        organizationUnitName: 'workloads',
        parent: organization,
      }
    );

    new Account(this, 'ProdAccount', {
      accountName: 'prodc-account',
      email: 'prod@example.com'
      parent: workloadOrganizationUnit,
    });
  }
}
