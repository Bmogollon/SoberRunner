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

// *********
// LOADING IMAGES TO SCREEN
function preload() {
   game.load.image('background', '<%= image_path('background.png') %>');
   // game.load.image('ground', '<%= image_path('platform.png') %>');
   game.load.image('diamond', '<%= image_path('vodka.png') %>');
   game.load.spritesheet('dude', '<%= image_path('dude.png') %>', 45, 48);
}



// ****************** CREATING PLAYER AND MOVEMENTS
function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);


    game.add.sprite(0, 0, 'background');


    platforms = game.add.group();


    platforms.enableBody = true;


    var ground = platforms.create(0, game.world.height - 100, 'ground');

    ground.scale.setTo(500, 5);

    ground.body.immovable = true;

    var ledge = platforms.create(-250,200, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(250,430, 'ground');

    ledge.body.immovable = true;

    player = game.add.sprite(32, game.world.height - 150, 'dude');

    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 700;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [3,4, 5], 10, true);
    player.animations.add('right', [ 6, 7, 8], 10, true);

    diamonds = game.add.group();

    diamonds.enableBody = true;

    for (var i = 0; i < 80; i++)
    {
        var diamond = diamonds.create(i * 70, 0, 'diamond');

        diamond.body.gravity.y = 900;

        diamond.body.bounce.y = 0.2 + Math.random() * 0.2;
    }

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: 'rgb(247, 247, 247)' });

    cursors = game.input.keyboard.createCursorKeys();
}
