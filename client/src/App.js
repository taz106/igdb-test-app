import React, { Component } from 'react';
import './App.css';

import GameList from './components/game-list/game-list';

import AppService from './service/App.service';

class App extends Component {
  service = new AppService();

  constructor() {
    super();
    this.state = {
      games: [],
      selectedGames: []
    }

    this.addSelectedGame = this.addSelectedGame.bind(this);
    this.removeSelectedGame = this.removeSelectedGame.bind(this);
  }

  componentDidMount() {
    console.log('calling now');
    this.service.getGameList().then(
      res => this.setState({ games: res.data })
    );
  }

  addSelectedGame(game) {
    const index = this.state.selectedGames.findIndex(selectedGame => selectedGame.id === game.id);
    console.log(index);
    if (index === -1) {
      this.setState({ selectedGames: [...this.state.selectedGames, game] });
    } else {
      alert('You have already selected this item');
    }
  }

  removeSelectedGame(gameId) {
    const index = this.state.selectedGames.findIndex(selectedGame => selectedGame.id === gameId);
    if (index === -1) {
      alert('You have not selected this item');
    } else {
      this.setState({
        selectedGames: this.state.selectedGames.filter(
          selectedGame => selectedGame.id !== gameId
        )
      });
    }

    console.log('calling removeSelected ', this.state.selectedGames);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <p>IGDB Test App</p>
          <div className="App-selected-item dropdown">
            <span className="dropdown-btn">Selected Item: {this.state.selectedGames.length}</span>
            <div className="dropdown-content">
            {
              this.state.selectedGames.map(selectedGame => 
                <a key={selectedGame.id} href={selectedGame.url}>{selectedGame.name}</a>
              )
            }
            </div>
          </div>
        </header>

        <GameList games={this.state.games}
          onSelect={this.addSelectedGame}
          onRemove={this.removeSelectedGame} />
      </div>
    );
  }
}

export default App;
