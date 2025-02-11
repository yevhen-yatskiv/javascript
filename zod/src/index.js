const stringSchema = require('./schemas/stringSchema');
const numberSchema = require('./schemas/numberSchema');
const booleanSchema = require('./schemas/booleanSchema');
const arraySchema = require('./schemas/arraySchema');
const objectSchema = require('./schemas/objectSchema');
const { z } = require('zod');

// Basic string schema
console.log(stringSchema.parse("Hello")); // "Hello"

// Number schema with constraints
console.log(numberSchema.parse(50)); // 50

// Boolean schema
console.log(booleanSchema.parse(true)); // true

// Array schema
console.log(arraySchema.parse([1, 2, 3])); // [1, 2, 3]

// Object schema
console.log(objectSchema.parse({ name: "John", age: 30 })); // { name: "John", age: 30 }

// Enum schema
const enumSchema = z.enum(["Red", "Green", "Blue"]);
console.log(enumSchema.parse("Red")); // "Red"

// Union schema
const unionSchema = z.union([z.string(), z.number()]);
console.log(unionSchema.parse("Hello")); // "Hello"
console.log(unionSchema.parse(42)); // 42

// Intersection schema
const intersectionSchema = z.intersection(
  z.object({ name: z.string() }),
  z.object({ age: z.number() })
);
console.log(intersectionSchema.parse({ name: "John", age: 30 })); // { name: "John", age: 30 }

// Optional schema
const optionalSchema = z.string().optional();
console.log(optionalSchema.parse(undefined)); // undefined
console.log(optionalSchema.parse("Hello")); // "Hello"

// Nullable schema
const nullableSchema = z.string().nullable();
console.log(nullableSchema.parse(null)); // null
console.log(nullableSchema.parse("Hello")); // "Hello"

// Default value
const defaultSchema = z.string().default("default value");
console.log(defaultSchema.parse(undefined)); // "default value"

// Transformations
const transformSchema = z.string().transform((val) => val.toUpperCase());
console.log(transformSchema.parse("hello")); // "HELLO"

// Custom validation
const customSchema = z.string().refine((val) => val.length > 5, {
  message: "String must be longer than 5 characters",
});
console.log(customSchema.safeParse("Hello")); // { success: false, error: ... }
console.log(customSchema.safeParse("Hello, World!")); // { success: true, data: "Hello, World!" }
