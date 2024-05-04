import { Construct } from 'constructs';
import { OrganizationUnit } from '@jttc/aws-organizations';

export class OrganizationStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const organizationUnit = OrganizationUnit.fromOrganizationUnitAttributes(
      this,
      'OrganizationUnit',
      {
        organizationUnitId: 'ou-84uhd9',
        organizationUnitName: 'worloads',
        organizationUnitArn:
          'arn:aws:organizations::123456789012:ou/o-74975/ou-84uhd9',
      }
    );
  }
}
