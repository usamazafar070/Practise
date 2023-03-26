import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  // On Submit Function
  const submitForm = (values) => {
    console.log(values.firstName, values.lastName, values.email);
  };

  // Validation Schema
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(5, "Only 5 characters are allowed to enter.")
      .required("The first name is required field."),
    lastName: Yup.string()
      .max(5, "Only 5 characters are allowed to enter.")
      .required("The last name is required field."),
    email: Yup.string().email().required(),
  });

  // Formik Implimentation
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: submitForm,
    validationSchema: SignupSchema,
  });
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div
          className="col-12 col-md-6 bg-info d-flex justify-content-center align-items-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/715995/pexels-photo-715995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-warning">Sign Up Form</h1>
        </div>
        <div className="col-12 col-md-6 bg-warning d-flex justify-content-center align-items-center p-5">
          <form onSubmit={handleSubmit} className="col-12">
            <div className="row">
              <div className="form-floating mb-3 col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label>First Name</label>
                {touched.firstName && errors.firstName && (
                  <div className="text-danger mt-2">{errors.firstName}</div>
                )}
              </div>
              <div className="form-floating mb-3 col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label>Last Name</label>
                {touched.lastName && errors.lastName && (
                  <div className="text-danger mt-2">{errors.lastName}</div>
                )}
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label>Email</label>
              {touched.email && errors.email && (
                <div className="text-danger mt-2">{errors.email}</div>
              )}
            </div>
            <div className="row">
              <button
                type="submit"
                className="btn btn-dark px-5 py-2 col-12 col-sm-5 mb-2"
                disabled={!isValid}
              >
                Sign Up
              </button>
              <button
                type="button"
                className="btn btn-dark px-5 py-2 mx-3 col-12 col-sm-5 mb-2"
                onClick={resetForm}
              >
                Reset Form
              </button>
            </div>
            <div className="col mt-4">
              <p className="text-dark">
                Already have an account?{" "}
                <span>
                  <Link
                    to="/newlogin"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
