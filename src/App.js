import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      creature: []
    };
  }

  componentDidMount() {
    axios.get("/api/monsters").then(res => {
      this.setState({
        creature: res.data
      });
    });
  }

  render() {
    console.log(this.state.creature);
    return (
      <div className="App">
        <button> Generate a creature!</button>
      </div>
    );
  }
}

export default App;
