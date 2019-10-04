class TicTacToe {
    constructor() {
      this.activePlayer = "x";
      this.winner = null;
      this.grid = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ];
    }
  
    getCurrentPlayerSymbol() {
      return this.activePlayer;
    }
  
    nextTurn(row, column) {
      if (this.grid[row][column] == null) {
        this.grid[row][column] = this.activePlayer;
        if (this.activePlayer == "x") {
          this.activePlayer = "o";
        } 
        else {
          this.activePlayer = "x";
        }
      }
     
    }
  
    isFinished() {
      return this.isDraw() || this.getWinner() != null;
    }
  
    getWinner() {
      this.winner = null;
      
      let option1 = this.grid[0][0] == this.grid[0][1] && this.grid[0][0] == this.grid[0][2];
      let option2 = this.grid[1][0] == this.grid[1][1] && this.grid[1][0] == this.grid[1][2];
      let option3 = this.grid[2][0] == this.grid[2][1] && this.grid[2][0] == this.grid[2][2];
      let option4 = this.grid[0][0] == this.grid[1][0] && this.grid[0][0] == this.grid[2][0];
      let option5 = this.grid[0][1] == this.grid[1][1] && this.grid[0][1] == this.grid[2][1];
      let option6 = this.grid[0][2] == this.grid[1][2] && this.grid[0][2] == this.grid[2][2];
      let option7 = this.grid[0][0] == this.grid[1][1] && this.grid[0][0] == this.grid[2][2];
      let option8 = this.grid[2][0] == this.grid[1][1] && this.grid[2][0] == this.grid[0][2];

  
      if (option1 == true) {
        this.winner = this.grid[0][0];
      } else if (option2 == true) {
        this.winner = this.grid[1][0];
      } else if (option3 == true) {
        this.winner = this.grid[2][0];
      } else if (option4 == true) {
        this.winner = this.grid[0][0];
      } else if (option5 == true) {
        this.winner = this.grid[0][1];
      } else if (option6 == true) {
        this.winner = this.grid[0][2];
      } else if (option7 == true) {
        this.winner = this.grid[0][0];
      } else if (option8 == true) {
        this.winner = this.grid[2][0];
      }
      return this.winner;
    }
  
    noMoreTurns() {
      let counter = 0;
      this.grid.forEach(function (elementRow){
            elementRow.forEach(function (elementColumn){
           if (elementColumn != null) {
            counter = counter + 1
           };
          })
      })
      if (counter == 9) {
        return (true);
      }
      else {
          return (false);
      }
    }
  
    isDraw() {
     
        if (this.noMoreTurns() && (this.getWinner() == null)){
            return (true);
        }
        else {
            return (false)
        };
    }
  
    getFieldValue(row, column) {
      return this.grid[row][column];
    }
  }
  
  module.exports = TicTacToe;