/*jshint node:true*/
'user strict';

var readlineSync = require('readline-sync')
var _ = require('lodash')

function Battleship(size, chances) {
    this.board = [];
    this.size = size;
    this.changes = chances;
    this.createBoard();
}

Battleship.prototype = {
    constructor : Battleship,
    createBoard: function() {

      var shipX = Math.floor(Math.random() * this.size)
      var shipY = Math.floor(Math.random() * this.size)

      for (x=0;x<this.size;x++) {

          this.board[x] = []
        for (y=0;y<this.size;y++) {

            this.board[x][y] = (x === shipX && y === shipY)
        }
      }
    },
    userTry: function() {
      for (t=0;t<this.changes;t++) {

        var userX = readlineSync.question('Position for x: ')
        var userY = readlineSync.question('Position for y: ')

        if (this.board[userX][userY] === true) {
          console.log("You won!")
          return
        }
        console.log("Try one more")
      }

      console.log("You lose!")
      console.log(this.board)
      return
    }
};

module.exports = Battleship;
