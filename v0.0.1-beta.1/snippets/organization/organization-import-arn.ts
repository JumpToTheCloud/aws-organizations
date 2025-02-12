import { Construct } from 'constructs';
import { Organization } from '@jttc/aws-organizations';

export class OrganizationStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const organization = Organization.fromOrganizationArn(
      this,
      'Organization',
      'arn:aws:organizations::123456789012:root/o-agnj84t7qk/r-m7g5'
    );
  }
}
