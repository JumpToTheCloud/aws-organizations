# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Organization <a name="Organization" id="@jttc/aws-organizations.Organization"></a>

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

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-organizations.Organization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-organizations.Organization.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-organizations.Organization.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@jttc/aws-organizations.Organization.fromOrganizationAttributes">fromOrganizationAttributes</a></code> | Import a Organization. |

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

##### `fromOrganizationAttributes` <a name="fromOrganizationAttributes" id="@jttc/aws-organizations.Organization.fromOrganizationAttributes"></a>

```typescript
import { Organization } from '@jttc/aws-organizations'

Organization.fromOrganizationAttributes(scope: Construct, id: string, attributes: OrganizationAttributes)
```

Import a Organization.

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
| <code><a href="#@jttc/aws-organizations.Organization.property.organizationArn">organizationArn</a></code> | <code>string</code> | *No description.* |
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
| <code><a href="#@jttc/aws-organizations.OrganizationBase.property.organizationArn">organizationArn</a></code> | <code>string</code> | *No description.* |
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


## Structs <a name="Structs" id="Structs"></a>

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


## Protocols <a name="Protocols" id="Protocols"></a>

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

