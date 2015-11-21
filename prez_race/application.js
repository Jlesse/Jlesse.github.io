//document on ready
$(function(){

  //player prototype holds position on board and type (1 or 2)
  function Player(player_type, player_strip){
    this.position = 0;
    this.player_type = player_type;
    this.$player_strip = $("#" + player_strip);
  }

  //game prototype, holds player strip location in DOM
  function Game(){
    this.player1 = new Player(1, "player1_strip");
    this.player1.keyNumber = 81;
    this.player2 = new Player(2, "player2_strip");
    this.player2.keyNumber = 80;
    this.board_size = 0;

    this.$player2_strip = $("#player2_strip");
  }

  // loads the board and sets board size
  Game.prototype.load_board = function(){

    for(i = 0; i <=15; i++){
      console.log("in for loop");
        $(this.player1.$player_strip).append("<td></td>");
        $(this.player2.$player_strip).append("<td></td>");
      }

    this.board_size = this.player1.$player_strip.children().length;
    console.log(this.board_size);
  }

  //add event listener for player movement keys
  var game_start = function(){$(document).on('keyup', function(event) {
    var keyNumber = event.which
      console.log("Key Pressed" + keyNumber);
      console.log("player key" + game.player1.keyNumber)
      if (keyNumber === game.player1.keyNumber) {
        game.player1.position++;
        if(game.player1.keyNumber === 81){
          game.player1.keyNumber = 87;
        } else if(game.player1.keyNumber === 87) {
          game.player1.keyNumber = 81;
        }
        game.update_player_position(game.player1);
      } else if (keyNumber === game.player2.keyNumber){
        game.player2.position++;
        if(game.player2.keyNumber === 80){
          game.player2.keyNumber = 79;
        } else if(game.player2.keyNumber === 79 ) {
          game.player2.keyNumber = 80;
        }
        game.update_player_position(game.player2);
      }

      if(game.player1.position >= game.board_size){
        $("#winning_message").html("<h1>PLAYER 1 WON<h1>");
        $(document).off('keyup');
      } else if(game.player2.position >= game.board_size) {
        $("#winning_message").html("<h1>PLAYER 2 WON<h1>");
        $(document).off('keyup');
      }
  });}

  //timer to count down for race begining
  Game.prototype.count_down = function(){
    var count = 0;
    var timer = setInterval(function(){

        count++;
        $("#count_down").html(count);
        if(count === 4){
        $("#count_down").html("GO!");
          clearInterval(timer);
          game_start();
        }
      }, 1000);

  }

  Game.prototype.update_player_position = function(player){
    // var $player_board = $(player);
    var active = "";
    if(player.player_type === 1){
       active = "active_bern";
    } else if (player.player_type === 2){
      active = "active_trump";
    }
    player.$player_strip.find("td").removeClass(active);
    $player_board = player.$player_strip.children();
    console.log($player_board[player.position]);
    $($player_board[player.position]).addClass(active);
  };




  //Driver
  //run game
  var game = new Game();
  game.load_board();
  $(document).off('keyup')
  game.count_down();

});