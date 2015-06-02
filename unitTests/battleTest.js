/*jshint node:true*/
'use strict';

var should = require('chai').should();
var Battleship = require('../Battleship');
var _ = require('lodash');

describe('Battleship', function() {

    it('Creates board', function() {
        var myBattleship = new Battleship(4,9);
        myBattleship.createBoard();
        myBattleship.board.length.should.equal(4);
        myBattleship.board[0].length.should.equal(4);
    });
});
