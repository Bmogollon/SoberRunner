// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
// require phaser


var game = new Phaser.Game(1300, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player;
var platforms;
var cursors;

var diamonds;


var score = 0;
var scoreText;


function preload() {
   game.load.image('background', '<%= image_path('background.png') %>');
   // game.load.image('ground', '<%= image_path('platform.png') %>');
   game.load.image('diamond', '<%= image_path('vodka.png') %>');
   game.load.spritesheet('dude', '<%= image_path('dude.png') %>', 45, 48);
}
