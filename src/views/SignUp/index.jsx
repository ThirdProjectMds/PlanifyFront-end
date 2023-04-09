import { useFormik } from "formik";
import React from "react";
import { FormControl } from "../../components/FormControl";
import { Input } from "../../components/Input";
import { signupSchema } from "../../utils/schemas/signup.schema";
import { signup } from '../../services/AuthService';
import { useNavigate } from "react-router-dom";


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
export const SignUp = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldError,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      signup({ firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password })
        .then((response) => {
          console.log(response);
          navigate("/login")
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            setFieldError("email", err?.response?.data?.message);
          } else {
            setFieldError("email", err.message);
          }
          setSubmitting(false);
        });
    },
  });
  return (
    <div className="sign-up">
    <form onSubmit={handleSubmit}>
    <FormControl text="First Name" error={touched.firstName && errors.firstName} htmlFor="firsName">
    <Input
      id="firstName"
      name="firstName"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.firstName}
      error={touched.firstName && errors.firstName}
      placeholder="Enter your first Name..."
    />
  </FormControl>
  <FormControl text="Last Name" error={touched.lastName && errors.lastName} htmlFor="lastName">
  <Input
    id="lastName"
    name="lastName"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.lastName}
    error={touched.lastName && errors.lastName}
    placeholder="Enter your last Name..."
  />
</FormControl>
    <FormControl text="Email" error={touched.email && errors.email} htmlFor="email">
      <Input
        id="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={touched.email && errors.email}
        placeholder="Enter your email..."
      />
    </FormControl>

    <FormControl text="Password" error={touched.password && errors.password} htmlFor="password">
      <Input
        id="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        error={touched.password && errors.password}
        placeholder="Enter your password..."
        type="password"
      />
    </FormControl>

    <button className="btn btn-primary" type="submit">
      {isSubmitting
        ? 'Submitting...'
        : 'Submit'
      }
    </button>
  </form>

  </div>
  )
};
