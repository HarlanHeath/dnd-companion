import React, { Component } from "react";

export default class CSheet extends Component {
  constructor() {
    super();
    this.state = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      charisma: 0,
      wisdom: 0,
      intelligence: 0
    };
  }
  render() {
    return (
      <div>
        <h1>Character Info</h1>
        <div className="attributes">
          <ul>
            <li>{this.state.strength}</li>
            <li>{this.state.dexterity}</li>
            <li>{this.state.constitution}</li>
            <li>{this.state.charisma}</li>
            <li>{this.state.wisdom}</li>
            <li>{this.state.intelligence}</li>
          </ul>
        </div>
      </div>
    );
  }
}
