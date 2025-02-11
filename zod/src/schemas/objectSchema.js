const { z } = require('zod');

const objectSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
});

module.exports = objectSchema;
