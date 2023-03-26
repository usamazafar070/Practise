import { useState } from "react";

function StateWithFunctionalComponent(props){

  // State with functional component
  const [newCount, updateNewCount] = useState(props.array[0].count);

  return (
    <div>
      <h1>Functional Component Sate: {newCount}</h1>
      <button onClick={() => updateNewCount(newCount + 1)}>
        Update Number
      </button>
    </div>
  );
}

export default StateWithFunctionalComponent;