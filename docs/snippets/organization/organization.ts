import { Construct } from 'constructs';
import { Organization } from '@jttc/aws-organizations';

export class OrganizationStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Organization(this, 'Organization');
  }
}
