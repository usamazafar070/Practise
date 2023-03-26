import React from 'react'
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link'
const Services = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HashLink
          to="/services/#section2"
          style={{ textDecoration: "none"}}
        >
          <h1 style={{ color: "white" }}>Hero Section</h1>
        </HashLink>
      </div>
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "black" }} id="section2">
          <Button btn-success>My Button</Button>
        </h1>
      </div>
    </div>
  );
}

export default Services