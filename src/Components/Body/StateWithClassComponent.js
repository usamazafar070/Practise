import React from "react";

export default class StateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Usama Zafar",
      count: 0,
    };
  }

  // State Name Update:
  updateName() {
    this.setState({
      name: "Shahzaib Naeem",
    });
  }

  // State Count Update:
  updateCount() {
    this.setState({
      // name : 'Name Updated...',
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1>Class Component State Name: {this.state.name}</h1>
          <button
            onClick={() => {
              this.updateName();
            }}
          >
            {" "}
            Update Name
          </button>
        </div>
        <div>
          <h1>Class Component State Counter: {this.state.count}</h1>
          <button
            onClick={() => {
              this.updateCount();
            }}
          >
            Update Number
          </button>
        </div>
      </div>
    );
  }
}
