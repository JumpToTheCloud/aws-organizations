# AWS Organization Unit

## Usage

### New Organization Unit from root organization

To create a new AWS Organization Unit, use the OrganizationUnit Construct provided.

=== "organization-unit.ts"

  ```typescript linenums="1" hl_lines="2 10 11 12 13"
  --8<-- "docs/snippets/organization-unit/organization-unit.ts"
  ```

### New Organization Unit from belongs to other Organization Unit

To create a new AWS Organization Unit which belongs to other Organization Unit.

=== "organization-unit.ts"

  ```typescript linenums="1" hl_lines="19-22"
  --8<-- "docs/snippets/organization-unit/organization-unit-other-unit.ts"
  ```

### Existing organization

The construct provides a method to import a organization unit from existing one

=== "organization-unit.ts"

  ```typescript linenums="1" hl_lines="8-17"
  --8<-- "docs/snippets/organization-unit/organization-unit-import.ts"
  ```