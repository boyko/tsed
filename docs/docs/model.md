# Model

The classes can be used as a model in your application.
Ts.ED uses these models to convert JSON objects to their class equivalents.

The classes models can be used in the following cases:

- Data serialization and deserialization ([Converters](/docs/converters.md)),
- Data validation with [AJV](/tutorials/ajv.md),
- Generating documentation with [Swagger](/tutorials/swagger.md).

To create a model, Ts.ED provides decorators which will store and generate a 
standard [JsonSchema](http://json-schema.org/) model.

## Example

The example below uses decorators to describe a property of the class and store metadata
such as the description of the field.

<<< @/docs/docs/snippets/model/example.ts

::: tip
The Model will generate a JsonSchema which can be used by modules supporting JsonSchema spec
:::

::: warning
The schema generated by Ts.ED lists only properties decorated by at least one decorator. In the previous example,
the `_id` won't be displayed in the JsonSchema. It's very important to understand that **TypeScript** only generates
 metadata on properties with at least of theses decorators:

<ApiList query="status.indexOf('jsonschema') > -1 && status.indexOf('decorator') > -1" />

:::

Our model is now described, we can use it inside a @@Controller@@ as input type parameter for our methods. 
Ts.ED will use the model to convert the raw data to an instance of your model.

<<< @/docs/docs/snippets/model/controller.ts

## Collections

Declaring a property that uses a collection is a bit different than declaring a simple property. TypeScript 
stores only the Array/Set/Map type when you declare the type of your property. The type used by the collection is lost.

To tell Ts.ED (and other third party which uses JsonSchema) that a property uses a collection with a specific type, you must 
use @@PropertyType@@ decorator as following:

<<< @/docs/docs/snippets/model/collections.ts

## Use JsonSchema

In some cases, it may be useful to retrieve the JSON Schema from a Model to use with another library.

Here is an example of use with the AJV library:

<<< @/docs/docs/snippets/model/jsonschema.ts

## Decorators

<ApiList query="status.indexOf('jsonschema') > -1 && status.indexOf('decorator') > -1" />
