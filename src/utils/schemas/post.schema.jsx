import * as Yup from "yup";

export const postSchema = Yup.object({
  title: Yup.
    string("Title err")
    .required("required"),
  direction: Yup
    .string("Direction err")
    .required("required"),
  description: Yup
    .string("description err")
    .required("required"),
  type: Yup
    .string("type err")
    .required("required"),
  category: Yup
    .string("category err")
    .required("required"),
  latitude: Yup
    .number("Direction err"),
  longitude: Yup
    .number("description err"),
  image: Yup
    .mixed()
    .test("fileType", "Formato de imagen no válido", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value.type);
    })
});