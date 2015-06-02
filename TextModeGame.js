/*jshint node:true*/
'use strict';

var Battleship = require('./Battleship');
var _ = require('lodash');

function TextModeGame(size, chances) {
    this.size = size;
    this.changes = chances;
    this.Battleship = {};
}

TextModeGame.prototype = {
    constructor : TextModeGame,
    initGame : function() {
        this.Battleship = new Battleship(this.size, this.changes);
        this.Battleship.userTry();
    }
};

var myTextModeGame = new TextModeGame(4,10);
myTextModeGame.initGame();

module.exports = TextModeGame;
