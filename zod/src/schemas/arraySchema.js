const { z } = require('zod');

const arraySchema = z.array(z.number());

module.exports = arraySchema;
