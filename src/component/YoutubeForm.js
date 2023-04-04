import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const onSubmit = (values) => {
  console.log("form values", values);
};

const YoutubeForm = () => {
  const formData = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  console.log("visiting fields", formData.touched);

  return (
    <div>
      <form className="form" onSubmit={formData.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.name}
        />
        {formData.errors.name && formData.touched.name ? <div>{formData.errors.name}</div> : null}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.email}
        />

        {formData.errors.email && formData.touched.email ? <div >{formData.errors.email}</div> : null}

        <label htmlFor="channel">Channel</label>
        <input
          id="channel"
          name="channel"
          type="text"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.channel}
        />

        {formData.errors.channel && formData.touched.channel ? <div>{formData.errors.channel}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
