const { z } = require('zod');

const numberSchema = z.number().min(0).max(100);

module.exports = numberSchema;
