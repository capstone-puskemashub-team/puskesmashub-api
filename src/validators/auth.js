const Joi = require('joi');
const validatorHandler = require('../middlewares/validatorHandler');

const signupValidator = (req, res, next) => {
  const schema = Joi.object().keys({
    username: Joi.string().trim().alphanum().min(3).max(30).required(),
    password: Joi.string()
      .trim()
      .pattern(new RegExp('^[a-zA-Z0-9]{8,}$'))
      .required(),
    firstname: Joi.string().trim().alphanum().min(3).max(50).required(),
    lastname: Joi.string().trim().alphanum().min(3).max(50).required(),
    telephone: Joi.string()
      .trim()
      .pattern(new RegExp("^[0-9]{12,}$"))
      .required(),
    roles: Joi.array()
  })

  validatorHandler(req, res, next, schema);
}

const signinValidator = (req, res, next) => {
  const schema = Joi.object().keys({
    username: Joi.string().trim().alphanum().min(3).max(30).required(),
    password: Joi.string()
      .trim()
      .pattern(new RegExp('^[a-zA-Z0-9]{8,}$'))
      .required(),
  })

  validatorHandler(req, res, next, schema)
}

module.exports = {
  signupValidator,
  signinValidator
};