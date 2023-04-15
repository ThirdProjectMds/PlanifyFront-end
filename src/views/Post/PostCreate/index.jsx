import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { FormControl } from "../../../components/FormControl";
import { Input } from "../../../components/Input";
import { postSchema } from "../../../utils/schemas/post.schema";
import {createPost, updatePost} from "../../../services/PostService";
import "./index.css";

const initialValues = {
  title: "",
  direction: "",
  description: "",
  type: "",
  category: "",
  image: "",
  latitude: "",
  longitude: "",
};
console.log(initialValues);
export const CreatePost = ({editValues}) => {
  
  const { id } = useParams();

  const submitButtonText = id ? "Guardar" : "Crear";

  const Navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: editValues || initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: postSchema,
    onSubmit: (values) => {
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("direction", values.direction);
      formData.append("description", values.description);
      formData.append("type", values.type);
      formData.append("category", values.category);
      formData.append("image", values.image);
      formData.append("latitude", values.latitude);
      formData.append("longitude", values.longitude);
      {
        editValues
          ? updatePost(formData, id)
              .then((response) => {
                Navigate(`/posts/${id}`);
                console.log(response);  
              })
              .catch((err) => console.log(err))
          : createPost(formData)
              .then((response) => {
                Navigate("/posts");
                console.log(response);
              })
              .catch((err) => {
                console.log(err);
              });
      }
      setSubmitting(false);
    },
  });
  return (
    <div className="create-post">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormControl
          text="Title"
          error={touched.title && errors.title}
          htmlFor="title"
        >
          <Input
            id="title"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            error={touched.title && errors.title}
            placeholder="Write a title"
          />
        </FormControl>
        <FormControl
          text="Direction"
          error={touched.direction && errors.direction}
          htmlFor="direction"
        >
          <Input
            id="direction"
            name="direction"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.direction}
            error={touched.direction && errors.direction}
            placeholder="Write a direction"
          />
        </FormControl>
        <FormControl
          text="Description"
          error={touched.description && errors.description}
          htmlFor="description"
        >
          <Input
            id="description"
            name="description"
            type="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            error={touched.description && errors.description}
            placeholder="Write a description"
          />
        </FormControl>
        <FormControl
          text="Type"
          error={touched.type && errors.type}
          htmlFor="type"
        >
          <Input
            id="type"
            name="type"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.type}
            error={touched.type && errors.type}
            placeholder="Write a type"
          />
        </FormControl>
        <FormControl
          text="Category"
          error={touched.category && errors.category}
          htmlFor="category"
        >
          <Input
            id="category"
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            error={touched.category && errors.category}
            placeholder="Write a category"
          />
        </FormControl>
        <FormControl
          text="Latitude"
          error={touched.latitude && errors.latitude}
          htmlFor="latitude"
        >
          <Input
            id="Latitude"
            name="latitude"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.latitude}
            error={touched.latitude && errors.latitude}
            placeholder="Write a latitude"
          />
        </FormControl>
        <FormControl
          text="Longitude"
          error={touched.longitude && errors.longitude}
          htmlFor="longitude"
        >
          <Input
            id="longitude"
            name="longitude"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.longitude}
            error={touched.longitude && errors.longitude}
            placeholder="Write a longitude"
          />
        </FormControl>

        <FormControl
          text="Images"
          error={touched.image && errors.image}
          htmlFor="image"
        >
          <input
            className="file-input"
            id="image"
            name="image"
            type="file"
            multiple
            onChange={(event) => {
              setFieldValue("image", event.currentTarget.files[0]);
            }}
          />
        </FormControl>

        <button className=" button-5  " type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Posting..." : submitButtonText}
        </button>
      </form>
    </div>
  );
};
