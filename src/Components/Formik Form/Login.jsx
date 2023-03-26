import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import * as Yup from 'yup';

const Login = () => {

    // Functions
    const callLoginApi = (values) => {
        console.log(values.email, values.password)
    }

    // Validation Schema
    const LoginSchema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(8, 'Password must be atleast 8 characters long.').required()
    })

    // Formik
    const { handleSubmit, handleChange, handleBlur, resetForm, touched, values, errors, isValid, dirty } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: callLoginApi,
      validationSchema: LoginSchema
    });
  return (
    <div>
      <Form onSubmit={handleSubmit} className="offset-2 col-8 p-5">
        <h1 className="font-bold text-center">Login Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Email"
          />
          {touched.email && errors.email && (
            <div className="text-danger">{errors.email}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Password"
          />
          {touched.password && errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </Form.Group>
        <Button
          variant="danger"
          type="button"
          className="mx-2"
          onClick={resetForm}
        >
          Reset
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="disabled: bg-indigo-300 text-white"
          disabled={!isValid}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
