const team = {
    _players: [
      {
        firstName: 'Tyrese',
        lastName: 'Haliburton',
        age: 21
      },
      {
        firstName: 'Gary',
        lastName: 'Trent Jr',
        age: 24
      },
      {
        firstName: 'Jimmy',
        lastName: 'Butlers',
        age: 32
      }
    ],
    _games: [
      {
        opponent: 'Sacramento Kings',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Miami Heat',
        teamPoints: 50,
        opponentPoints: 30
      },
      {
        opponent: 'Toronto Raptors',
        teamPoints: 30,
        opponentPoints: 60
      }
    ],
    get players() {
      return this._players
    },
    get games() {
      return this._games
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this.games.push(game);
    }
  }
  
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  
  team.addGame('Chicago Bulls', 54, 76)
  team.addGame('Lakers', 30, 23)
  team.addGame('Dolphins', 32, 87)