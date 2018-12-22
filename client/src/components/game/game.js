import React, { Component } from 'react';
import './game.css';

class Game extends Component {
  constructor() {
    super();

    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onSelect() {
    this.props.onSelect(this.props.game);
  }

  onRemove() {
    this.props.onRemove(this.props.game.id);
  }

  render() {
    return (
      <div className="Game">
        <p>{this.props.game.name}</p>
        <p>Rating: {this.props.game.total_rating}</p>
        <p>Summary: {this.props.game.summary}</p>
        For more information please visit: 
        <a href={this.props.game.url} target="_blank" rel="noopener noreferrer">{this.props.game.url}</a>
        <br />
        <button className="action-btn add" onClick={this.onSelect}>Add</button>
        <button className="action-btn remove" onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

export default Game;
