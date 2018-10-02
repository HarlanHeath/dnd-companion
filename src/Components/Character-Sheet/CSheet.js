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
        <div className="character-sheet">
          <div className="attributes">
            <div>Strength: {this.state.strength}</div>
            <div>Dexterity: {this.state.dexterity}</div>
            <div>Constitution: {this.state.constitution}</div>
            <div>Charisma: {this.state.charisma}</div>
            <div>Wisdom: {this.state.wisdom}</div>
            <div>Intelligence: {this.state.intelligence}</div>
          </div>
        </div>
      </div>
    );
  }
}
