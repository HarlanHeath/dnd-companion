import React, { Component } from "react";
import axios from "axios";
import Nav from "./Components/Nav/Nav";
import CContain from "./Components/CreatureContainer/CContain";
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
        <Nav />
        <h1>DnD Companion App!</h1>
        <CContain />
        <button> Generate a creature!</button>
      </div>
    );
  }
}

export default App;
