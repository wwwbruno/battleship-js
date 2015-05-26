
var readlineSync = require('readline-sync')

var board = []
var size = 5;
var changes = 9;

var craeteBoard = function() {

  var shipX = Math.floor(Math.random() * size)
  var shipY = Math.floor(Math.random() * size)

  for (x=0;x<size;x++) {

    board[x] = []
    for (y=0;y<size;y++) {

      board[x][y] = (x === shipX && y === shipY)
    }
  }
}

var userTry = function() {

  craeteBoard();

  for (t=0;t<changes;t++) {

    var userX = readlineSync.question('Position for x: ')
    var userY = readlineSync.question('Position for y: x')

    if (board[userX][userY] === true) {
      console.log("You won!")
      return
    }
    console.log("Try one more")
  }

  console.log("You lose!")
  console.log(board)
  return
}

userTry()
