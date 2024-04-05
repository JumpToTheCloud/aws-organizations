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

=== "organization.ts"

  ```typescript linenums="1" hl_lines="2 8"
  --8<-- "docs/snippets/organization/organization.ts"
  ```

The construct provides the option to create the organization in Consolidated Bill feature set.

=== "organization.ts"

  ```typescript linenums="1" hl_lines="9"
  --8<-- "docs/snippets/organization/organization-consolidated-bill.ts"
  ```

#### Existing organization

The construct provides a method to import a organization from existing one

=== "organization.ts"

  ```typescript linenums="1" hl_lines="8-17"
  --8<-- "docs/snippets/organization/organization-import.ts"
  ```