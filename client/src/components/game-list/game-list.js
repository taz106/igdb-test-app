import React, { Component } from 'react';
import './game-list.css';

import Game from '../game/game';

class GameList extends Component {
  render() {
    return (
      <div>
        <p className="List-header">Game List</p>
        <div className="Game-list">
        {this.props.games.map(game => 
          <Game key={game.id} game={game} onSelect={this.props.onSelect} onRemove={this.props.onRemove} />
        )}
        </div>
      </div>
    );
  }
}

export default GameList;
