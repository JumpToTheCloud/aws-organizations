import { Construct } from 'constructs';
import { Account } from '@jttc/aws-organizations';

export class OrganizationStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    Account.fromAccountAttributes(this, 'ProdAccount', {
      accountId: '123456789012',
      organizationUnitId: 'ou-8470ddj',
    });
  }
}
