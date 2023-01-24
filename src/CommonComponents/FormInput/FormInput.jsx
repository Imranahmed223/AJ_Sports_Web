import React from "react";
import "./FormInput.scss";
import { ErrorMessage, useField } from "formik";
const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className={`form-input ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="form-error" />
    </>
  );
};

export default FormInput;
