import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

const NewLogin = () => {
  
  // NewLogin Validation Schema
  const NewLoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters long.").required(),
  });

  // Formik Implimentation
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: NewLoginSchema,
  });

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div
          className="col-12 col-md-6 bg-info d-flex justify-content-center align-items-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2823459/pexels-photo-2823459.jpeg?auto=compress&cs=tinysrgb&w=600')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-danger">Login Form</h1>
        </div>
        <div className="col-12 col-md-6 bg-danger d-flex justify-content-center align-items-center p-5">
          <form onSubmit={handleSubmit} className="col-12">
            <div className="form-floating mb-3 col-12">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <label>Email</label>
              {touched.email && errors.email && (
                <div className="text-dark mt-2">{errors.email}</div>
              )}
            </div>
            <div className="form-floating mb-3 col-12">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <label>Password</label>
              {touched.password && errors.password && (
                <div className="text-dark mt-2">{errors.password}</div>
              )}
            </div>
            {/* Form Buttons */}
            <div className="row">
              <button
                type="submit"
                className="btn btn-dark px-5 py-2 col-12 col-sm-5 mb-2"
                disabled={!isValid}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-dark px-5 py-2 mx-3 col-12 col-sm-5 mb-2"
                onClick={resetForm}
              >
                Reset Form
              </button>
            </div>
            <div>
              <p className="text-white">
                Want to create an account?{" "}
                <span>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Sign Up
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
export default NewLogin;
