const Joi = require("joi");

const updateScheme = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string()
}).min(1);

module.exports = updateScheme