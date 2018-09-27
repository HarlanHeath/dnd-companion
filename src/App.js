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

  creaturePicker = () => {
    const creature = this.state.creature[
      Math.floor(Math.random() * this.state.creature.length)
    ];
    console.log(creature);
    axios.get(`/api/monsters/${creature.url}`).then(res => console.log(res));
  };

  render() {
    console.log(this.state.creature);
    return (
      <div className="App">
        <Nav />
        <h1>DnD Companion App!</h1>
        <CContain />
        <button onClick={this.creaturePicker}> Generate a creature!</button>
      </div>
    );
  }
}

export default App;
