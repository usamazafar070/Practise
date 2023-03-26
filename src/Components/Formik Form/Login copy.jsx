import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {

    // States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    // Functions
    function callLoginApi(event) {
        event.preventDefault();
        if(password.length < 8) {
            setPasswordError("Password should be atleast 8 characters long.");
            return;
        }
        // console.log('sending data', email, password);
        
    }
    function handleEmailChange(event) {
        setEmail(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
        
        if(password.length <= 8) {
            setPasswordError('');
        }
    }
    function handlePasswordOnBlur() {
        if (password.length < 8) {
          setPasswordError("Password should be atleast 8 characters long.");
        }
    }
    function resetForm() {
        setEmail('');
        setPassword('');
    }

  return (
    <div className="flex items-center justify-center">
      <Form onSubmit={callLoginApi} className="flex flex-col p-5">
        <h1 className="font-bold text-center">Login Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordOnBlur}
            placeholder="Enter Password"
          />
          {passwordError && <div className="text-red-500">{passwordError}</div>}
        </Form.Group>
        <Button variant="primary" type="button" className="mx-2" onClick={resetForm}>
          Reset
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
