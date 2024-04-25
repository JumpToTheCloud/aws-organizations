import { Construct } from 'constructs';
import { Organization } from '@jttc/aws-organizations';

export class OrganizationStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const organization = Organization.fromOrganizationAttributes(
      this,
      'Organization',
      {
        organizationId: 'o-agnj84t7qk',
        organizationRootId: 'r-rkw8',
        managementAccountId: '123456789012',
      }
    );
  }
}
