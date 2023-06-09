const validatorHandler = async (req, res, next, schema) => {
  const { error } = schema.validate(req.body);

  if (error) {
    let message = ''

    if(error.details[0].path[0] == 'password') {
      message = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.'
    } else {
      message = error.details[0].message;
    }

    res.status(400).json({
      status: 'error',
      message: message
    })

    return
  }

  next()
}

module.exports = validatorHandler