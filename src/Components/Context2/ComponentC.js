import React from "react";
import { data } from "./ComponentA";
const ComponentC = () => {
  return (
    <div>
      <data.Consumer>
        {(res) => {
          return(
            <div>
                <h1>Component C Name : {res.name2}</h1>
            </div>
          )
        }}
      </data.Consumer>
    </div>
  );
};

export default ComponentC;
