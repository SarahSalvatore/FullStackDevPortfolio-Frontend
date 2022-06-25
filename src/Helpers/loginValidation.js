const loginValidation = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "*Please enter your username.";
  }

  if (!values.password) {
    errors.password = "*Please enter your email address.";
  }

  return errors;
};

export default loginValidation;
