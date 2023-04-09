import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstName: Yup
  .string("Name err")
  .required("Required"),
  lastName: Yup
  .string("Name err")
  .required("Required"),
  email: Yup
  .string('Email err')
  .email('Invalid email')
  .required('Required'),
password: Yup
  .string('Password err')
  .min(8, 'Length invalid')
  .required('Required')
});
