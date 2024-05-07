# AWS Organizations Construct Library

# AWS Organization

## Getting started

### Installation

Install the library in your project:

```shell
npm install @jttc/aws-organization
```
```shell
yarn add @jttc/aws-organization
```

### Usage

#### New Organization

To create a new AWS Organization, use the Organization Construct provided. By default, it creates an organization with all FeatureSet.

```
import { Construct } from 'constructs';
import { Organization } from '@jttc/aws-organizations';

export class OrganizationStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Organization(this, 'Organization');
  }
}
```

#### New Organization Unit from root organization

To create a new AWS Organization Unit, use the OrganizationUnit Construct provided.

```
import { Construct } from 'constructs';
import { Organization, OrganizationUnit } from '@jttc/aws-organizations';

export class OrganizationStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const organization = new Organization(this, 'Organization');

    new OrganizationUnit(this, 'WorkloadsOrganizationUnit', {
      organizationUnitName: 'workloads',
      parent: organization,
    });
  }
}

```


#### Create new Account

To create a new Account, use the Account Construct provided.

```
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
```

#### Service Control Policy

Attached a Service Control Policy to an Organization Unit or an Account

```
import { Construct } from 'constructs';
import {
  Organization,
  OrganizationUnit,
  Account,
  ServiceControlPolicy
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

    const policy = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['s3:*'],
      resources: ['*'],
    });
    
    new ServiceControlPolicy(stack, 'ServiceControlPolicy', {
      name: 'test-policy',
      description: 'test policy',
      statements: [policy],
      targetIds: [workloadOrganizationUnit.organizationUnitId],
    });
  }
}
```