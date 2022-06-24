const formValidation = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "*Please enter your name.";
  } else if (values.name.length < 2) {
    errors.name = "*Name must be at least 2 characters.";
  } else if (values.name.length > 50) {
    errors.name = "*Name must be less than 50 characters.";
  }

  if (!values.email) {
    errors.email = "*Please enter your email address.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "*Please enter a valid email address.";
  } else if (values.email.length > 60) {
    errors.email = "*Too long! Maximum email size exceeded.";
  }

  if (!values.message) {
    errors.message = "*Please enter a message.";
  } else if (values.message.length < 4) {
    errors.message = "*Message must be at least 4 characters.";
  } else if (values.message.length > 350) {
    errors.message = "*Message must be less than 350 characters.";
  }

  return errors;
};

export default formValidation;
