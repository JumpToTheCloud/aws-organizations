# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Account <a name="Account" id="@jttc/aws-organizations.Account"></a>

Create a new AWS Account.

#### Initializers <a name="Initializers" id="@jttc/aws-organizations.Account.Initializer"></a>

```typescript
import { Account } from '@jttc/aws-organizations'

new Account(scope: Construct, id: string, props: AccountProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.Account.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.Account.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.Account.Initializer.parameter.props">props</a></code> | <code><a href="#@jttc/aws-organizations.AccountProps">AccountProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.Account.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.Account.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@jttc/aws-organizations.Account.Initializer.parameter.props"></a>

- *Type:* <a href="#@jttc/aws-organizations.AccountProps">AccountProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.Account.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-organizations.Account.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@jttc/aws-organizations.Account.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-organizations.Account.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-organizations.Account.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.Account.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-organizations.Account.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-organizations.Account.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@jttc/aws-organizations.Account.fromAccountAttributes">fromAccountAttributes</a></code> | Import a Organization. |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-organizations.Account.isConstruct"></a>

```typescript
import { Account } from '@jttc/aws-organizations'

Account.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-organizations.Account.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-organizations.Account.isOwnedResource"></a>

```typescript
import { Account } from '@jttc/aws-organizations'

Account.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.Account.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-organizations.Account.isResource"></a>

```typescript
import { Account } from '@jttc/aws-organizations'

Account.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.Account.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromAccountAttributes` <a name="fromAccountAttributes" id="@jttc/aws-organizations.Account.fromAccountAttributes"></a>

```typescript
import { Account } from '@jttc/aws-organizations'

Account.fromAccountAttributes(scope: Construct, id: string, attributes: AccountAttributes)
```

Import a Organization.

*Example*

```typescript
   Organization.fromOrganizationAttributes(this, 'Organization', {
     organizationId: 'o-xxxx',
     organizationRootId: 'r-xxxx',
     managementAccountId: 'xxxx',
   });
```


###### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.Account.fromAccountAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.Account.fromAccountAttributes.parameter.id"></a>

- *Type:* string

---

###### `attributes`<sup>Required</sup> <a name="attributes" id="@jttc/aws-organizations.Account.fromAccountAttributes.parameter.attributes"></a>

- *Type:* <a href="#@jttc/aws-organizations.AccountAttributes">AccountAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.Account.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.Account.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.Account.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.Account.property.accountArn">accountArn</a></code> | <code>string</code> | The Arn of the created account. |
| <code><a href="#@jttc/aws-organizations.Account.property.accountId">accountId</a></code> | <code>string</code> | The account id created. |
| <code><a href="#@jttc/aws-organizations.Account.property.roleName">roleName</a></code> | <code>string</code> | The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.Account.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.Account.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.Account.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `accountArn`<sup>Required</sup> <a name="accountArn" id="@jttc/aws-organizations.Account.property.accountArn"></a>

```typescript
public readonly accountArn: string;
```

- *Type:* string

The Arn of the created account.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@jttc/aws-organizations.Account.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account id created.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@jttc/aws-organizations.Account.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.

---


### AccountBase <a name="AccountBase" id="@jttc/aws-organizations.AccountBase"></a>

- *Implements:* <a href="#@jttc/aws-organizations.IAccount">IAccount</a>

#### Initializers <a name="Initializers" id="@jttc/aws-organizations.AccountBase.Initializer"></a>

```typescript
import { AccountBase } from '@jttc/aws-organizations'

new AccountBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.AccountBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.AccountBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.AccountBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.AccountBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.AccountBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jttc/aws-organizations.AccountBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.AccountBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-organizations.AccountBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@jttc/aws-organizations.AccountBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-organizations.AccountBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-organizations.AccountBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.AccountBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-organizations.AccountBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-organizations.AccountBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-organizations.AccountBase.isConstruct"></a>

```typescript
import { AccountBase } from '@jttc/aws-organizations'

AccountBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-organizations.AccountBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-organizations.AccountBase.isOwnedResource"></a>

```typescript
import { AccountBase } from '@jttc/aws-organizations'

AccountBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.AccountBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-organizations.AccountBase.isResource"></a>

```typescript
import { AccountBase } from '@jttc/aws-organizations'

AccountBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.AccountBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.AccountBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.AccountBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.AccountBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.AccountBase.property.accountArn">accountArn</a></code> | <code>string</code> | The Arn of the created account. |
| <code><a href="#@jttc/aws-organizations.AccountBase.property.accountId">accountId</a></code> | <code>string</code> | The account id created. |
| <code><a href="#@jttc/aws-organizations.AccountBase.property.roleName">roleName</a></code> | <code>string</code> | The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.AccountBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.AccountBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.AccountBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `accountArn`<sup>Required</sup> <a name="accountArn" id="@jttc/aws-organizations.AccountBase.property.accountArn"></a>

```typescript
public readonly accountArn: string;
```

- *Type:* string

The Arn of the created account.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@jttc/aws-organizations.AccountBase.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account id created.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@jttc/aws-organizations.AccountBase.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.

---


### Organization <a name="Organization" id="@jttc/aws-organizations.Organization"></a>

Create a new organization.

*Example*

```typescript
   new Organization(this, 'Organization');
```


#### Initializers <a name="Initializers" id="@jttc/aws-organizations.Organization.Initializer"></a>

```typescript
import { Organization } from '@jttc/aws-organizations'

new Organization(scope: Construct, id: string, props?: OrganizationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.Organization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.Organization.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.Organization.Initializer.parameter.props">props</a></code> | <code><a href="#@jttc/aws-organizations.OrganizationProps">OrganizationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.Organization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.Organization.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jttc/aws-organizations.Organization.Initializer.parameter.props"></a>

- *Type:* <a href="#@jttc/aws-organizations.OrganizationProps">OrganizationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.Organization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-organizations.Organization.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@jttc/aws-organizations.Organization.addOrganizationUnit">addOrganizationUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@jttc/aws-organizations.Organization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-organizations.Organization.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-organizations.Organization.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addOrganizationUnit` <a name="addOrganizationUnit" id="@jttc/aws-organizations.Organization.addOrganizationUnit"></a>

```typescript
public addOrganizationUnit(organizationUnitName: string): void
```

###### `organizationUnitName`<sup>Required</sup> <a name="organizationUnitName" id="@jttc/aws-organizations.Organization.addOrganizationUnit.parameter.organizationUnitName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.Organization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-organizations.Organization.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-organizations.Organization.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@jttc/aws-organizations.Organization.fromOrganizationArn">fromOrganizationArn</a></code> | Import a Organization from arn. |
| <code><a href="#@jttc/aws-organizations.Organization.fromOrganizationAttributes">fromOrganizationAttributes</a></code> | Import a Organization from attributes. |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-organizations.Organization.isConstruct"></a>

```typescript
import { Organization } from '@jttc/aws-organizations'

Organization.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-organizations.Organization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-organizations.Organization.isOwnedResource"></a>

```typescript
import { Organization } from '@jttc/aws-organizations'

Organization.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.Organization.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-organizations.Organization.isResource"></a>

```typescript
import { Organization } from '@jttc/aws-organizations'

Organization.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.Organization.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromOrganizationArn` <a name="fromOrganizationArn" id="@jttc/aws-organizations.Organization.fromOrganizationArn"></a>

```typescript
import { Organization } from '@jttc/aws-organizations'

Organization.fromOrganizationArn(scope: Construct, id: string, organizationArn: string)
```

Import a Organization from arn.

*Example*

```typescript
   Organization.fromOrganizationArn(this, 'Organization', 'arn:aws:organizations::123456789012:root/o-agnj84t7qk/r-m7g5');
```


###### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.Organization.fromOrganizationArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.Organization.fromOrganizationArn.parameter.id"></a>

- *Type:* string

---

###### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@jttc/aws-organizations.Organization.fromOrganizationArn.parameter.organizationArn"></a>

- *Type:* string

---

##### `fromOrganizationAttributes` <a name="fromOrganizationAttributes" id="@jttc/aws-organizations.Organization.fromOrganizationAttributes"></a>

```typescript
import { Organization } from '@jttc/aws-organizations'

Organization.fromOrganizationAttributes(scope: Construct, id: string, attributes: OrganizationAttributes)
```

Import a Organization from attributes.

*Example*

```typescript
   Organization.fromOrganizationAttributes(this, 'Organization', {
     organizationId: 'o-xxxx',
     organizationRootId: 'r-xxxx',
     managementAccountId: 'xxxx',
   });
```


###### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.Organization.fromOrganizationAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.Organization.fromOrganizationAttributes.parameter.id"></a>

- *Type:* string

---

###### `attributes`<sup>Required</sup> <a name="attributes" id="@jttc/aws-organizations.Organization.fromOrganizationAttributes.parameter.attributes"></a>

- *Type:* <a href="#@jttc/aws-organizations.OrganizationAttributes">OrganizationAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.Organization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.Organization.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.Organization.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.Organization.property.managementAccountId">managementAccountId</a></code> | <code>string</code> | The unique identifier (ID) of the management account of an organization. |
| <code><a href="#@jttc/aws-organizations.Organization.property.organizationArn">organizationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the organization. |
| <code><a href="#@jttc/aws-organizations.Organization.property.organizationId">organizationId</a></code> | <code>string</code> | The unique identifier (ID) of the organization. |
| <code><a href="#@jttc/aws-organizations.Organization.property.organizationRootId">organizationRootId</a></code> | <code>string</code> | The unique identifier (ID) of the organization root. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.Organization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.Organization.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.Organization.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `managementAccountId`<sup>Required</sup> <a name="managementAccountId" id="@jttc/aws-organizations.Organization.property.managementAccountId"></a>

```typescript
public readonly managementAccountId: string;
```

- *Type:* string

The unique identifier (ID) of the management account of an organization.

---

##### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@jttc/aws-organizations.Organization.property.organizationArn"></a>

```typescript
public readonly organizationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the organization.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@jttc/aws-organizations.Organization.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The unique identifier (ID) of the organization.

---

##### `organizationRootId`<sup>Required</sup> <a name="organizationRootId" id="@jttc/aws-organizations.Organization.property.organizationRootId"></a>

```typescript
public readonly organizationRootId: string;
```

- *Type:* string

The unique identifier (ID) of the organization root.

---


### OrganizationBase <a name="OrganizationBase" id="@jttc/aws-organizations.OrganizationBase"></a>

- *Implements:* <a href="#@jttc/aws-organizations.IOrganization">IOrganization</a>

#### Initializers <a name="Initializers" id="@jttc/aws-organizations.OrganizationBase.Initializer"></a>

```typescript
import { OrganizationBase } from '@jttc/aws-organizations'

new OrganizationBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.OrganizationBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.OrganizationBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jttc/aws-organizations.OrganizationBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.addOrganizationUnit">addOrganizationUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@jttc/aws-organizations.OrganizationBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-organizations.OrganizationBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-organizations.OrganizationBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addOrganizationUnit` <a name="addOrganizationUnit" id="@jttc/aws-organizations.OrganizationBase.addOrganizationUnit"></a>

```typescript
public addOrganizationUnit(organizationUnitName: string): void
```

###### `organizationUnitName`<sup>Required</sup> <a name="organizationUnitName" id="@jttc/aws-organizations.OrganizationBase.addOrganizationUnit.parameter.organizationUnitName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-organizations.OrganizationBase.isConstruct"></a>

```typescript
import { OrganizationBase } from '@jttc/aws-organizations'

OrganizationBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-organizations.OrganizationBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-organizations.OrganizationBase.isOwnedResource"></a>

```typescript
import { OrganizationBase } from '@jttc/aws-organizations'

OrganizationBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.OrganizationBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-organizations.OrganizationBase.isResource"></a>

```typescript
import { OrganizationBase } from '@jttc/aws-organizations'

OrganizationBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.OrganizationBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.property.managementAccountId">managementAccountId</a></code> | <code>string</code> | The unique identifier (ID) of the management account of an organization. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.property.organizationArn">organizationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the organization. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.property.organizationId">organizationId</a></code> | <code>string</code> | The unique identifier (ID) of the organization. |
| <code><a href="#@jttc/aws-organizations.OrganizationBase.property.organizationRootId">organizationRootId</a></code> | <code>string</code> | The unique identifier (ID) of the organization root. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.OrganizationBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.OrganizationBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.OrganizationBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `managementAccountId`<sup>Required</sup> <a name="managementAccountId" id="@jttc/aws-organizations.OrganizationBase.property.managementAccountId"></a>

```typescript
public readonly managementAccountId: string;
```

- *Type:* string

The unique identifier (ID) of the management account of an organization.

---

##### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@jttc/aws-organizations.OrganizationBase.property.organizationArn"></a>

```typescript
public readonly organizationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the organization.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@jttc/aws-organizations.OrganizationBase.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The unique identifier (ID) of the organization.

---

##### `organizationRootId`<sup>Required</sup> <a name="organizationRootId" id="@jttc/aws-organizations.OrganizationBase.property.organizationRootId"></a>

```typescript
public readonly organizationRootId: string;
```

- *Type:* string

The unique identifier (ID) of the organization root.

---


### OrganizationUnit <a name="OrganizationUnit" id="@jttc/aws-organizations.OrganizationUnit"></a>

Create a new Organization Unit.

*Example*

```typescript
new OrganizationUnit(this, 'OU', {
  organizationUnitName: 'OU',
  parent: 'r-123456789',
});
```


#### Initializers <a name="Initializers" id="@jttc/aws-organizations.OrganizationUnit.Initializer"></a>

```typescript
import { OrganizationUnit } from '@jttc/aws-organizations'

new OrganizationUnit(scope: Construct, id: string, props: IOrganizationUnitProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.Initializer.parameter.props">props</a></code> | <code><a href="#@jttc/aws-organizations.IOrganizationUnitProps">IOrganizationUnitProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.OrganizationUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.OrganizationUnit.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@jttc/aws-organizations.OrganizationUnit.Initializer.parameter.props"></a>

- *Type:* <a href="#@jttc/aws-organizations.IOrganizationUnitProps">IOrganizationUnitProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@jttc/aws-organizations.OrganizationUnit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-organizations.OrganizationUnit.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-organizations.OrganizationUnit.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.fromOrganizationUnitAttributes">fromOrganizationUnitAttributes</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-organizations.OrganizationUnit.isConstruct"></a>

```typescript
import { OrganizationUnit } from '@jttc/aws-organizations'

OrganizationUnit.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-organizations.OrganizationUnit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-organizations.OrganizationUnit.isOwnedResource"></a>

```typescript
import { OrganizationUnit } from '@jttc/aws-organizations'

OrganizationUnit.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.OrganizationUnit.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-organizations.OrganizationUnit.isResource"></a>

```typescript
import { OrganizationUnit } from '@jttc/aws-organizations'

OrganizationUnit.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.OrganizationUnit.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromOrganizationUnitAttributes` <a name="fromOrganizationUnitAttributes" id="@jttc/aws-organizations.OrganizationUnit.fromOrganizationUnitAttributes"></a>

```typescript
import { OrganizationUnit } from '@jttc/aws-organizations'

OrganizationUnit.fromOrganizationUnitAttributes(scope: Construct, id: string, attrs: OrganizationUnitAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.OrganizationUnit.fromOrganizationUnitAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.OrganizationUnit.fromOrganizationUnitAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@jttc/aws-organizations.OrganizationUnit.fromOrganizationUnitAttributes.parameter.attrs"></a>

- *Type:* <a href="#@jttc/aws-organizations.OrganizationUnitAttributes">OrganizationUnitAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.property.organizationUnitArn">organizationUnitArn</a></code> | <code>string</code> | The ARN of the OU. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.property.organizationUnitId">organizationUnitId</a></code> | <code>string</code> | The ID of the OU. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnit.property.organizationUnitName">organizationUnitName</a></code> | <code>string</code> | The Organization Unit name. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.OrganizationUnit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.OrganizationUnit.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.OrganizationUnit.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `organizationUnitArn`<sup>Required</sup> <a name="organizationUnitArn" id="@jttc/aws-organizations.OrganizationUnit.property.organizationUnitArn"></a>

```typescript
public readonly organizationUnitArn: string;
```

- *Type:* string

The ARN of the OU.

---

##### `organizationUnitId`<sup>Required</sup> <a name="organizationUnitId" id="@jttc/aws-organizations.OrganizationUnit.property.organizationUnitId"></a>

```typescript
public readonly organizationUnitId: string;
```

- *Type:* string

The ID of the OU.

---

##### `organizationUnitName`<sup>Required</sup> <a name="organizationUnitName" id="@jttc/aws-organizations.OrganizationUnit.property.organizationUnitName"></a>

```typescript
public readonly organizationUnitName: string;
```

- *Type:* string

The Organization Unit name.

---


### OrganizationUnitBase <a name="OrganizationUnitBase" id="@jttc/aws-organizations.OrganizationUnitBase"></a>

- *Implements:* <a href="#@jttc/aws-organizations.IOrganizationUnits">IOrganizationUnits</a>

#### Initializers <a name="Initializers" id="@jttc/aws-organizations.OrganizationUnitBase.Initializer"></a>

```typescript
import { OrganizationUnitBase } from '@jttc/aws-organizations'

new OrganizationUnitBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.OrganizationUnitBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.OrganizationUnitBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jttc/aws-organizations.OrganizationUnitBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@jttc/aws-organizations.OrganizationUnitBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-organizations.OrganizationUnitBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-organizations.OrganizationUnitBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-organizations.OrganizationUnitBase.isConstruct"></a>

```typescript
import { OrganizationUnitBase } from '@jttc/aws-organizations'

OrganizationUnitBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-organizations.OrganizationUnitBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-organizations.OrganizationUnitBase.isOwnedResource"></a>

```typescript
import { OrganizationUnitBase } from '@jttc/aws-organizations'

OrganizationUnitBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.OrganizationUnitBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-organizations.OrganizationUnitBase.isResource"></a>

```typescript
import { OrganizationUnitBase } from '@jttc/aws-organizations'

OrganizationUnitBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.OrganizationUnitBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.property.organizationUnitArn">organizationUnitArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of this OU. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.property.organizationUnitId">organizationUnitId</a></code> | <code>string</code> | The unique identifier (ID) associated with this OU. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitBase.property.organizationUnitName">organizationUnitName</a></code> | <code>string</code> | The name of the OU. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.OrganizationUnitBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.OrganizationUnitBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.OrganizationUnitBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `organizationUnitArn`<sup>Required</sup> <a name="organizationUnitArn" id="@jttc/aws-organizations.OrganizationUnitBase.property.organizationUnitArn"></a>

```typescript
public readonly organizationUnitArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of this OU.

---

##### `organizationUnitId`<sup>Required</sup> <a name="organizationUnitId" id="@jttc/aws-organizations.OrganizationUnitBase.property.organizationUnitId"></a>

```typescript
public readonly organizationUnitId: string;
```

- *Type:* string

The unique identifier (ID) associated with this OU.

---

##### `organizationUnitName`<sup>Required</sup> <a name="organizationUnitName" id="@jttc/aws-organizations.OrganizationUnitBase.property.organizationUnitName"></a>

```typescript
public readonly organizationUnitName: string;
```

- *Type:* string

The name of the OU.

---


### OrganzationPolicyBase <a name="OrganzationPolicyBase" id="@jttc/aws-organizations.OrganzationPolicyBase"></a>

- *Implements:* <a href="#@jttc/aws-organizations.IOrganizationPolicy">IOrganizationPolicy</a>

#### Initializers <a name="Initializers" id="@jttc/aws-organizations.OrganzationPolicyBase.Initializer"></a>

```typescript
import { OrganzationPolicyBase } from '@jttc/aws-organizations'

new OrganzationPolicyBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.OrganzationPolicyBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.OrganzationPolicyBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jttc/aws-organizations.OrganzationPolicyBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@jttc/aws-organizations.OrganzationPolicyBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-organizations.OrganzationPolicyBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-organizations.OrganzationPolicyBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-organizations.OrganzationPolicyBase.isConstruct"></a>

```typescript
import { OrganzationPolicyBase } from '@jttc/aws-organizations'

OrganzationPolicyBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-organizations.OrganzationPolicyBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-organizations.OrganzationPolicyBase.isOwnedResource"></a>

```typescript
import { OrganzationPolicyBase } from '@jttc/aws-organizations'

OrganzationPolicyBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.OrganzationPolicyBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-organizations.OrganzationPolicyBase.isResource"></a>

```typescript
import { OrganzationPolicyBase } from '@jttc/aws-organizations'

OrganzationPolicyBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.OrganzationPolicyBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.property.organizationPolicyArn">organizationPolicyArn</a></code> | <code>string</code> | Returns the Amazon Resource Name (ARN) of the policy. |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.property.organizationPolicyId">organizationPolicyId</a></code> | <code>string</code> | Returns the unique identifier (ID) of the policy. |
| <code><a href="#@jttc/aws-organizations.OrganzationPolicyBase.property.targetIds">targetIds</a></code> | <code>string[]</code> | List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.OrganzationPolicyBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.OrganzationPolicyBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.OrganzationPolicyBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `organizationPolicyArn`<sup>Required</sup> <a name="organizationPolicyArn" id="@jttc/aws-organizations.OrganzationPolicyBase.property.organizationPolicyArn"></a>

```typescript
public readonly organizationPolicyArn: string;
```

- *Type:* string

Returns the Amazon Resource Name (ARN) of the policy.

---

##### `organizationPolicyId`<sup>Required</sup> <a name="organizationPolicyId" id="@jttc/aws-organizations.OrganzationPolicyBase.property.organizationPolicyId"></a>

```typescript
public readonly organizationPolicyId: string;
```

- *Type:* string

Returns the unique identifier (ID) of the policy.

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@jttc/aws-organizations.OrganzationPolicyBase.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.

---


### ServiceControlPolicy <a name="ServiceControlPolicy" id="@jttc/aws-organizations.ServiceControlPolicy"></a>

Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual AWS account.

*Example*

```typescript
import { ServiceControlPolicy } from '@jttc/aws-organizations';

const serviceControlPolicy = new ServiceControlPolicy(this, 'ServiceControlPolicy', {
  name: 'ServiceControlPolicy',
  description: 'Service Control Policy',
  statements: [
    new PolicyStatement({
      actions: ['s3:*'],
      resources: ['*'],
    }),
  ],
  targetIds: ['o-12345678'],
});
```


#### Initializers <a name="Initializers" id="@jttc/aws-organizations.ServiceControlPolicy.Initializer"></a>

```typescript
import { ServiceControlPolicy } from '@jttc/aws-organizations'

new ServiceControlPolicy(scope: Construct, id: string, props: ServiceControlPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.Initializer.parameter.props">props</a></code> | <code><a href="#@jttc/aws-organizations.ServiceControlPolicyProps">ServiceControlPolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-organizations.ServiceControlPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-organizations.ServiceControlPolicy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@jttc/aws-organizations.ServiceControlPolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#@jttc/aws-organizations.ServiceControlPolicyProps">ServiceControlPolicyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.addTarget">addTarget</a></code> | Add a target which will be applied this Policy. |

---

##### `toString` <a name="toString" id="@jttc/aws-organizations.ServiceControlPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-organizations.ServiceControlPolicy.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-organizations.ServiceControlPolicy.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addTarget` <a name="addTarget" id="@jttc/aws-organizations.ServiceControlPolicy.addTarget"></a>

```typescript
public addTarget(target: string): void
```

Add a target which will be applied this Policy.

It must be a unique identifiers (IDs) of the root, OU,
or account that you want to attach the policy to.

###### `target`<sup>Required</sup> <a name="target" id="@jttc/aws-organizations.ServiceControlPolicy.addTarget.parameter.target"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-organizations.ServiceControlPolicy.isConstruct"></a>

```typescript
import { ServiceControlPolicy } from '@jttc/aws-organizations'

ServiceControlPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-organizations.ServiceControlPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-organizations.ServiceControlPolicy.isOwnedResource"></a>

```typescript
import { ServiceControlPolicy } from '@jttc/aws-organizations'

ServiceControlPolicy.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.ServiceControlPolicy.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-organizations.ServiceControlPolicy.isResource"></a>

```typescript
import { ServiceControlPolicy } from '@jttc/aws-organizations'

ServiceControlPolicy.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-organizations.ServiceControlPolicy.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.property.organizationPolicyArn">organizationPolicyArn</a></code> | <code>string</code> | Returns the Amazon Resource Name (ARN) of the policy. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.property.organizationPolicyId">organizationPolicyId</a></code> | <code>string</code> | Returns the unique identifier (ID) of the policy. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicy.property.targetIds">targetIds</a></code> | <code>string[]</code> | List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.ServiceControlPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.ServiceControlPolicy.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.ServiceControlPolicy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `organizationPolicyArn`<sup>Required</sup> <a name="organizationPolicyArn" id="@jttc/aws-organizations.ServiceControlPolicy.property.organizationPolicyArn"></a>

```typescript
public readonly organizationPolicyArn: string;
```

- *Type:* string

Returns the Amazon Resource Name (ARN) of the policy.

---

##### `organizationPolicyId`<sup>Required</sup> <a name="organizationPolicyId" id="@jttc/aws-organizations.ServiceControlPolicy.property.organizationPolicyId"></a>

```typescript
public readonly organizationPolicyId: string;
```

- *Type:* string

Returns the unique identifier (ID) of the policy.

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@jttc/aws-organizations.ServiceControlPolicy.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.

---


## Structs <a name="Structs" id="Structs"></a>

### AccountAttributes <a name="AccountAttributes" id="@jttc/aws-organizations.AccountAttributes"></a>

#### Initializer <a name="Initializer" id="@jttc/aws-organizations.AccountAttributes.Initializer"></a>

```typescript
import { AccountAttributes } from '@jttc/aws-organizations'

const accountAttributes: AccountAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.AccountAttributes.property.accountId">accountId</a></code> | <code>string</code> | The account id created. |
| <code><a href="#@jttc/aws-organizations.AccountAttributes.property.organizationUnitId">organizationUnitId</a></code> | <code>string</code> | The Organization Unit Id ou-xxxxxx. |
| <code><a href="#@jttc/aws-organizations.AccountAttributes.property.roleName">roleName</a></code> | <code>string</code> | The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@jttc/aws-organizations.AccountAttributes.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account id created.

---

##### `organizationUnitId`<sup>Required</sup> <a name="organizationUnitId" id="@jttc/aws-organizations.AccountAttributes.property.organizationUnitId"></a>

```typescript
public readonly organizationUnitId: string;
```

- *Type:* string

The Organization Unit Id ou-xxxxxx.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@jttc/aws-organizations.AccountAttributes.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.

---

### AccountProps <a name="AccountProps" id="@jttc/aws-organizations.AccountProps"></a>

#### Initializer <a name="Initializer" id="@jttc/aws-organizations.AccountProps.Initializer"></a>

```typescript
import { AccountProps } from '@jttc/aws-organizations'

const accountProps: AccountProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.AccountProps.property.accountName">accountName</a></code> | <code>string</code> | The account name given to the account when it was created. |
| <code><a href="#@jttc/aws-organizations.AccountProps.property.email">email</a></code> | <code>string</code> | The email address associated with the AWS account. |
| <code><a href="#@jttc/aws-organizations.AccountProps.property.parent">parent</a></code> | <code>string \| <a href="#@jttc/aws-organizations.OrganizationUnit">OrganizationUnit</a></code> | The unique identifier (ID) of the root or organizational unit (OU) that you want to create the new account in. |
| <code><a href="#@jttc/aws-organizations.AccountProps.property.roleName">roleName</a></code> | <code>string</code> | The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. |
| <code><a href="#@jttc/aws-organizations.AccountProps.property.tags">tags</a></code> | <code>aws-cdk-lib.Tag[]</code> | A list of tags that you want to attach to the newly created account. |

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@jttc/aws-organizations.AccountProps.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

The account name given to the account when it was created.

---

##### `email`<sup>Required</sup> <a name="email" id="@jttc/aws-organizations.AccountProps.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address associated with the AWS account.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@jttc/aws-organizations.AccountProps.property.parent"></a>

```typescript
public readonly parent: string | OrganizationUnit;
```

- *Type:* string | <a href="#@jttc/aws-organizations.OrganizationUnit">OrganizationUnit</a>

The unique identifier (ID) of the root or organizational unit (OU) that you want to create the new account in.

If you don't specify this parameter, the ParentId defaults to the root ID.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@jttc/aws-organizations.AccountProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.

This role trusts the management account, allowing users in the management account to assume the role,
as permitted by the management account administrator.

The role has administrator permissions in the new member account.

If you don't specify this parameter, the role name defaults to OrganizationAccountAccessRole.

For more information about how to use this role to access the member account, see the following links:
- Creating the OrganizationAccountAccessRole in an invited member account in the AWS Organizations User Guide

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@jttc/aws-organizations.AccountProps.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* aws-cdk-lib.Tag[]

A list of tags that you want to attach to the newly created account.

For each tag in the list, you must specify both a tag key and a value.
You can set the value to an empty string, but you can't set it to null

---

### OrganizationAttributes <a name="OrganizationAttributes" id="@jttc/aws-organizations.OrganizationAttributes"></a>

#### Initializer <a name="Initializer" id="@jttc/aws-organizations.OrganizationAttributes.Initializer"></a>

```typescript
import { OrganizationAttributes } from '@jttc/aws-organizations'

const organizationAttributes: OrganizationAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationAttributes.property.managementAccountId">managementAccountId</a></code> | <code>string</code> | The unique identifier (ID) of the management account of an organization. |
| <code><a href="#@jttc/aws-organizations.OrganizationAttributes.property.organizationId">organizationId</a></code> | <code>string</code> | The unique identifier (ID) of the organization. |
| <code><a href="#@jttc/aws-organizations.OrganizationAttributes.property.organizationRootId">organizationRootId</a></code> | <code>string</code> | The unique identifier (ID) of the organization root. |

---

##### `managementAccountId`<sup>Required</sup> <a name="managementAccountId" id="@jttc/aws-organizations.OrganizationAttributes.property.managementAccountId"></a>

```typescript
public readonly managementAccountId: string;
```

- *Type:* string

The unique identifier (ID) of the management account of an organization.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@jttc/aws-organizations.OrganizationAttributes.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The unique identifier (ID) of the organization.

---

##### `organizationRootId`<sup>Required</sup> <a name="organizationRootId" id="@jttc/aws-organizations.OrganizationAttributes.property.organizationRootId"></a>

```typescript
public readonly organizationRootId: string;
```

- *Type:* string

The unique identifier (ID) of the organization root.

---

### OrganizationProps <a name="OrganizationProps" id="@jttc/aws-organizations.OrganizationProps"></a>

#### Initializer <a name="Initializer" id="@jttc/aws-organizations.OrganizationProps.Initializer"></a>

```typescript
import { OrganizationProps } from '@jttc/aws-organizations'

const organizationProps: OrganizationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationProps.property.featureSet">featureSet</a></code> | <code><a href="#@jttc/aws-organizations.OrganizationFeatureSet">OrganizationFeatureSet</a></code> | Specifies the feature set supported by the new organization. |

---

##### `featureSet`<sup>Optional</sup> <a name="featureSet" id="@jttc/aws-organizations.OrganizationProps.property.featureSet"></a>

```typescript
public readonly featureSet: OrganizationFeatureSet;
```

- *Type:* <a href="#@jttc/aws-organizations.OrganizationFeatureSet">OrganizationFeatureSet</a>
- *Default:* OrganizationFeatureSet.ALL

Specifies the feature set supported by the new organization.

---

### OrganizationUnitAttributes <a name="OrganizationUnitAttributes" id="@jttc/aws-organizations.OrganizationUnitAttributes"></a>

#### Initializer <a name="Initializer" id="@jttc/aws-organizations.OrganizationUnitAttributes.Initializer"></a>

```typescript
import { OrganizationUnitAttributes } from '@jttc/aws-organizations'

const organizationUnitAttributes: OrganizationUnitAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitAttributes.property.organizationUnitArn">organizationUnitArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of this OU. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitAttributes.property.organizationUnitId">organizationUnitId</a></code> | <code>string</code> | The unique identifier (ID) associated with this OU. |
| <code><a href="#@jttc/aws-organizations.OrganizationUnitAttributes.property.organizationUnitName">organizationUnitName</a></code> | <code>string</code> | The name of the OU. |

---

##### `organizationUnitArn`<sup>Required</sup> <a name="organizationUnitArn" id="@jttc/aws-organizations.OrganizationUnitAttributes.property.organizationUnitArn"></a>

```typescript
public readonly organizationUnitArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of this OU.

---

##### `organizationUnitId`<sup>Required</sup> <a name="organizationUnitId" id="@jttc/aws-organizations.OrganizationUnitAttributes.property.organizationUnitId"></a>

```typescript
public readonly organizationUnitId: string;
```

- *Type:* string

The unique identifier (ID) associated with this OU.

---

##### `organizationUnitName`<sup>Required</sup> <a name="organizationUnitName" id="@jttc/aws-organizations.OrganizationUnitAttributes.property.organizationUnitName"></a>

```typescript
public readonly organizationUnitName: string;
```

- *Type:* string

The name of the OU.

---

### ServiceControlPolicyProps <a name="ServiceControlPolicyProps" id="@jttc/aws-organizations.ServiceControlPolicyProps"></a>

#### Initializer <a name="Initializer" id="@jttc/aws-organizations.ServiceControlPolicyProps.Initializer"></a>

```typescript
import { ServiceControlPolicyProps } from '@jttc/aws-organizations'

const serviceControlPolicyProps: ServiceControlPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicyProps.property.description">description</a></code> | <code>string</code> | The description of the policy. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicyProps.property.name">name</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicyProps.property.statements">statements</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Represents a statement in an IAM policy document. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicyProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The policy to apply when the policy is removed from the organization. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicyProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | A list of tags that you want to attach to the newly created policy. |
| <code><a href="#@jttc/aws-organizations.ServiceControlPolicyProps.property.targetIds">targetIds</a></code> | <code>string[]</code> | List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to. |

---

##### `description`<sup>Required</sup> <a name="description" id="@jttc/aws-organizations.ServiceControlPolicyProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the policy.

---

##### `name`<sup>Required</sup> <a name="name" id="@jttc/aws-organizations.ServiceControlPolicyProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the policy.

---

##### `statements`<sup>Required</sup> <a name="statements" id="@jttc/aws-organizations.ServiceControlPolicyProps.property.statements"></a>

```typescript
public readonly statements: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

Represents a statement in an IAM policy document.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@jttc/aws-organizations.ServiceControlPolicyProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The policy to apply when the policy is removed from the organization.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@jttc/aws-organizations.ServiceControlPolicyProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

A list of tags that you want to attach to the newly created policy.

---

##### `targetIds`<sup>Optional</sup> <a name="targetIds" id="@jttc/aws-organizations.ServiceControlPolicyProps.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAccount <a name="IAccount" id="@jttc/aws-organizations.IAccount"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@jttc/aws-organizations.Account">Account</a>, <a href="#@jttc/aws-organizations.AccountBase">AccountBase</a>, <a href="#@jttc/aws-organizations.IAccount">IAccount</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.IAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.IAccount.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.IAccount.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.IAccount.property.accountArn">accountArn</a></code> | <code>string</code> | The Arn of the created account. |
| <code><a href="#@jttc/aws-organizations.IAccount.property.accountId">accountId</a></code> | <code>string</code> | The account id created. |
| <code><a href="#@jttc/aws-organizations.IAccount.property.roleName">roleName</a></code> | <code>string</code> | The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.IAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.IAccount.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.IAccount.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `accountArn`<sup>Required</sup> <a name="accountArn" id="@jttc/aws-organizations.IAccount.property.accountArn"></a>

```typescript
public readonly accountArn: string;
```

- *Type:* string

The Arn of the created account.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@jttc/aws-organizations.IAccount.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account id created.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@jttc/aws-organizations.IAccount.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.

---

### IOrganization <a name="IOrganization" id="@jttc/aws-organizations.IOrganization"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@jttc/aws-organizations.Organization">Organization</a>, <a href="#@jttc/aws-organizations.OrganizationBase">OrganizationBase</a>, <a href="#@jttc/aws-organizations.IOrganization">IOrganization</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.IOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.IOrganization.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.IOrganization.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.IOrganization.property.managementAccountId">managementAccountId</a></code> | <code>string</code> | The unique identifier (ID) of the management account of an organization. |
| <code><a href="#@jttc/aws-organizations.IOrganization.property.organizationArn">organizationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the organization. |
| <code><a href="#@jttc/aws-organizations.IOrganization.property.organizationId">organizationId</a></code> | <code>string</code> | The unique identifier (ID) of the organization. |
| <code><a href="#@jttc/aws-organizations.IOrganization.property.organizationRootId">organizationRootId</a></code> | <code>string</code> | The unique identifier (ID) of the organization root. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.IOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.IOrganization.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.IOrganization.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `managementAccountId`<sup>Required</sup> <a name="managementAccountId" id="@jttc/aws-organizations.IOrganization.property.managementAccountId"></a>

```typescript
public readonly managementAccountId: string;
```

- *Type:* string

The unique identifier (ID) of the management account of an organization.

---

##### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@jttc/aws-organizations.IOrganization.property.organizationArn"></a>

```typescript
public readonly organizationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the organization.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@jttc/aws-organizations.IOrganization.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The unique identifier (ID) of the organization.

---

##### `organizationRootId`<sup>Required</sup> <a name="organizationRootId" id="@jttc/aws-organizations.IOrganization.property.organizationRootId"></a>

```typescript
public readonly organizationRootId: string;
```

- *Type:* string

The unique identifier (ID) of the organization root.

---

### IOrganizationPolicy <a name="IOrganizationPolicy" id="@jttc/aws-organizations.IOrganizationPolicy"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@jttc/aws-organizations.OrganzationPolicyBase">OrganzationPolicyBase</a>, <a href="#@jttc/aws-organizations.ServiceControlPolicy">ServiceControlPolicy</a>, <a href="#@jttc/aws-organizations.IOrganizationPolicy">IOrganizationPolicy</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.IOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.IOrganizationPolicy.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.IOrganizationPolicy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.IOrganizationPolicy.property.organizationPolicyArn">organizationPolicyArn</a></code> | <code>string</code> | Returns the Amazon Resource Name (ARN) of the policy. |
| <code><a href="#@jttc/aws-organizations.IOrganizationPolicy.property.organizationPolicyId">organizationPolicyId</a></code> | <code>string</code> | Returns the unique identifier (ID) of the policy. |
| <code><a href="#@jttc/aws-organizations.IOrganizationPolicy.property.targetIds">targetIds</a></code> | <code>string[]</code> | List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.IOrganizationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.IOrganizationPolicy.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.IOrganizationPolicy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `organizationPolicyArn`<sup>Required</sup> <a name="organizationPolicyArn" id="@jttc/aws-organizations.IOrganizationPolicy.property.organizationPolicyArn"></a>

```typescript
public readonly organizationPolicyArn: string;
```

- *Type:* string

Returns the Amazon Resource Name (ARN) of the policy.

---

##### `organizationPolicyId`<sup>Required</sup> <a name="organizationPolicyId" id="@jttc/aws-organizations.IOrganizationPolicy.property.organizationPolicyId"></a>

```typescript
public readonly organizationPolicyId: string;
```

- *Type:* string

Returns the unique identifier (ID) of the policy.

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@jttc/aws-organizations.IOrganizationPolicy.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.

---

### IOrganizationUnitProps <a name="IOrganizationUnitProps" id="@jttc/aws-organizations.IOrganizationUnitProps"></a>

- *Implemented By:* <a href="#@jttc/aws-organizations.IOrganizationUnitProps">IOrganizationUnitProps</a>

Organization Unit Properties.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.IOrganizationUnitProps.property.organizationUnitName">organizationUnitName</a></code> | <code>string</code> | The name of the OU. |
| <code><a href="#@jttc/aws-organizations.IOrganizationUnitProps.property.parent">parent</a></code> | <code>string \| <a href="#@jttc/aws-organizations.IOrganization">IOrganization</a> \| <a href="#@jttc/aws-organizations.OrganizationUnit">OrganizationUnit</a></code> | The unique identifier (ID) of the parent root or OU that you want to create the new OU in. |

---

##### `organizationUnitName`<sup>Required</sup> <a name="organizationUnitName" id="@jttc/aws-organizations.IOrganizationUnitProps.property.organizationUnitName"></a>

```typescript
public readonly organizationUnitName: string;
```

- *Type:* string

The name of the OU.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@jttc/aws-organizations.IOrganizationUnitProps.property.parent"></a>

```typescript
public readonly parent: string | IOrganization | OrganizationUnit;
```

- *Type:* string | <a href="#@jttc/aws-organizations.IOrganization">IOrganization</a> | <a href="#@jttc/aws-organizations.OrganizationUnit">OrganizationUnit</a>

The unique identifier (ID) of the parent root or OU that you want to create the new OU in.

---

### IOrganizationUnits <a name="IOrganizationUnits" id="@jttc/aws-organizations.IOrganizationUnits"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@jttc/aws-organizations.OrganizationUnit">OrganizationUnit</a>, <a href="#@jttc/aws-organizations.OrganizationUnitBase">OrganizationUnitBase</a>, <a href="#@jttc/aws-organizations.IOrganizationUnits">IOrganizationUnits</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-organizations.IOrganizationUnits.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-organizations.IOrganizationUnits.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-organizations.IOrganizationUnits.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-organizations.IOrganizationUnits.property.organizationUnitArn">organizationUnitArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of this OU. |
| <code><a href="#@jttc/aws-organizations.IOrganizationUnits.property.organizationUnitId">organizationUnitId</a></code> | <code>string</code> | The unique identifier (ID) associated with this OU. |
| <code><a href="#@jttc/aws-organizations.IOrganizationUnits.property.organizationUnitName">organizationUnitName</a></code> | <code>string</code> | The name of the OU. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-organizations.IOrganizationUnits.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-organizations.IOrganizationUnits.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-organizations.IOrganizationUnits.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `organizationUnitArn`<sup>Required</sup> <a name="organizationUnitArn" id="@jttc/aws-organizations.IOrganizationUnits.property.organizationUnitArn"></a>

```typescript
public readonly organizationUnitArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of this OU.

---

##### `organizationUnitId`<sup>Required</sup> <a name="organizationUnitId" id="@jttc/aws-organizations.IOrganizationUnits.property.organizationUnitId"></a>

```typescript
public readonly organizationUnitId: string;
```

- *Type:* string

The unique identifier (ID) associated with this OU.

---

##### `organizationUnitName`<sup>Required</sup> <a name="organizationUnitName" id="@jttc/aws-organizations.IOrganizationUnits.property.organizationUnitName"></a>

```typescript
public readonly organizationUnitName: string;
```

- *Type:* string

The name of the OU.

---

## Enums <a name="Enums" id="Enums"></a>

### OrganizationFeatureSet <a name="OrganizationFeatureSet" id="@jttc/aws-organizations.OrganizationFeatureSet"></a>

Specifies the feature set supported by the new organization.

Each feature set supports different levels of functionality.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationFeatureSet.ALL">ALL</a></code> | In addition to all the features supported by the consolidated billing feature set, the management account gains access to advanced features that give you more control over accounts in your organization. |
| <code><a href="#@jttc/aws-organizations.OrganizationFeatureSet.CONSOLIDATED_BILLING">CONSOLIDATED_BILLING</a></code> | All member accounts have their bills consolidated to and paid by the management account. |

---

##### `ALL` <a name="ALL" id="@jttc/aws-organizations.OrganizationFeatureSet.ALL"></a>

In addition to all the features supported by the consolidated billing feature set, the management account gains access to advanced features that give you more control over accounts in your organization.

By default or if you set the FeatureSet property to ALL, the new organization is created
with all features enabled and service control policies automatically enabled in the root.

---


##### `CONSOLIDATED_BILLING` <a name="CONSOLIDATED_BILLING" id="@jttc/aws-organizations.OrganizationFeatureSet.CONSOLIDATED_BILLING"></a>

All member accounts have their bills consolidated to and paid by the management account.

---


### OrganizationPolicyType <a name="OrganizationPolicyType" id="@jttc/aws-organizations.OrganizationPolicyType"></a>

The type of policy to create.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.OrganizationPolicyType.SERVICE_CONTROL_POLICY">SERVICE_CONTROL_POLICY</a></code> | Service control policies (SCPs) enable central administration over the maximum permissions that identities (users and roles) within accounts in your organization can have. |
| <code><a href="#@jttc/aws-organizations.OrganizationPolicyType.BACKUP_POLICY">BACKUP_POLICY</a></code> | Backup policies enable you to deploy organization-wide backup plans to help ensure compliance across your organization's accounts. |
| <code><a href="#@jttc/aws-organizations.OrganizationPolicyType.TAG_POLICY">TAG_POLICY</a></code> | Tag policies help you standardize tags on all tagged resources across your organization. |
| <code><a href="#@jttc/aws-organizations.OrganizationPolicyType.AISERVICES_OPT_OUT_POLICY">AISERVICES_OPT_OUT_POLICY</a></code> | Artificial Intelligence (AI) services opt-out policies enable you to control whether AWS AI services can store and use your content. |

---

##### `SERVICE_CONTROL_POLICY` <a name="SERVICE_CONTROL_POLICY" id="@jttc/aws-organizations.OrganizationPolicyType.SERVICE_CONTROL_POLICY"></a>

Service control policies (SCPs) enable central administration over the maximum permissions that identities (users and roles) within accounts in your organization can have.

This helps ensure that your identities stay within your organization’s access control guidelines

> [https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html?icmpid=docs_orgs_console](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html?icmpid=docs_orgs_console)

---


##### `BACKUP_POLICY` <a name="BACKUP_POLICY" id="@jttc/aws-organizations.OrganizationPolicyType.BACKUP_POLICY"></a>

Backup policies enable you to deploy organization-wide backup plans to help ensure compliance across your organization's accounts.

Using policies helps ensure consistency in how you implement your backup plans.

> [https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html?icmpid=docs_orgs_console](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html?icmpid=docs_orgs_console)

---


##### `TAG_POLICY` <a name="TAG_POLICY" id="@jttc/aws-organizations.OrganizationPolicyType.TAG_POLICY"></a>

Tag policies help you standardize tags on all tagged resources across your organization.

You can use tag policies to define tag keys (including how they should be capitalized)
and their allowed values

> [https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)

---


##### `AISERVICES_OPT_OUT_POLICY` <a name="AISERVICES_OPT_OUT_POLICY" id="@jttc/aws-organizations.OrganizationPolicyType.AISERVICES_OPT_OUT_POLICY"></a>

Artificial Intelligence (AI) services opt-out policies enable you to control whether AWS AI services can store and use your content.

> [https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html?icmpid=docs_orgs_console](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html?icmpid=docs_orgs_console)

---

