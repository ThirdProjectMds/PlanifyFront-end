import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup
    .string('Email err')
    .email('Invalid email')
    .required('Required'),
  password: Yup
    .string('Password err')
    .min(8, 'Length invalid')
    .required('Required')
})