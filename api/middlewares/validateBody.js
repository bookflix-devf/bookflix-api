const validateBody = (schema) => async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    req.body = value;
    next();
  } catch (error) {
    res.status(400).json({
      msg: 'Invalid body',
      error,
    });
  }
};

export default validateBody;
