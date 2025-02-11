# Zod Subproject

This subproject demonstrates the usage of the Zod library to validate and parse data.

## Installation

To install the Zod library, run:

```sh
npm install zod
```

## Usage

### Basic Schema

```javascript
const { z } = require('zod');

const schema = z.string();
schema.parse('Hello'); // => 'Hello'
schema.parse(123); // throws ZodError
```

### Object Schema

```javascript
const userSchema = z.object({
  name: z.string(),
  age: z.number().int(),
});

userSchema.parse({ name: 'John', age: 30 }); // => { name: 'John', age: 30 }
userSchema.parse({ name: 'John', age: '30' }); // throws ZodError
```

### Array Schema

```javascript
const arraySchema = z.array(z.number());

arraySchema.parse([1, 2, 3]); // => [1, 2, 3]
arraySchema.parse(['1', '2', '3']); // throws ZodError
```

### Union Types

```javascript
const unionSchema = z.union([z.string(), z.number()]);

unionSchema.parse('Hello'); // => 'Hello'
unionSchema.parse(123); // => 123
unionSchema.parse(true); // throws ZodError
```

### Custom Error Messages

```javascript
const customSchema = z.string().min(5, { message: 'Must be at least 5 characters long' });

customSchema.parse('Hello'); // => 'Hello'
customSchema.parse('Hi'); // throws ZodError with custom message
```

For more examples and detailed documentation, visit the [Zod documentation](https://github.com/colinhacks/zod).
