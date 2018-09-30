import React, { Component } from "react";

export default class CSheet extends Component {
  constructor() {
    super();
    this.state = {
      stats: [
        { strength: 0 },
        { dexterity: 0 },
        { constitution: 0 },
        { charisma: 0 },
        { wisdom: 0 },
        { intelligence: 0 }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Character Info</h1>
        <div className="char-stats">{this.state.stats}</div>
      </div>
    );
  }
}
