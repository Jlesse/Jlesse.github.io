// Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description:Kill the Wizard
// Overall mission: kill all monsters in the dungeon and then kill the wizard, and do not die.
// Goals: kill goblin, kill ogre, kill dragon, kill wizard.
// Characters: Barbarius, Goblin, Ogre, Dragon, Wizard.
// Objects: player{name: Barbarius attack: 4 defense: 4 health: 20 name: potions:0 equiped:normal_sword}
//          goblin{name: goblin attack:0 defense:2 health:8 potions:1}
//          ogre{name: ogre attack:2 defense:6 health:10 potions: 1}
//          dragon{name: dragon attack:5 defense:8 health:15 potions: 1}
//          wizard{name: wizard attack:6 defense:5 health:20 potions:0}
// Functions:
// display_player_attributes
// display_monster_appearance
// battle
// attack
// take_damage
// use_potion
// main_loop
// intro
//
// Pseudocode
//
//create player object
//create goblin object
//create ogre object
//create dragon object
//create wizard object
//create monster_array
//create variable current_dungeon = 0
//create varibale cur_monster
//create game_done = false;

//INTRO METHOD
//define intro function with no parameters
//  write the intro story to the console
//end function
//
/*
MAIN LOOP
define main_loop function with no parameters
  display_monster
  create variable option
  while game != game_done
    print menu options
      1. use a potion
      2. go to next room
      3. exclaim "Damn you wizard!!!"
      4. exit game
    prompt the user for input and set option
    create switch that takes option
      case 1 : call the use_potion function
      case 2 : call the battle function
      case 3 : print "Damn you wizard!!!"
      case 4 : game_done = true
      defualt case : "Not a valid option! Use your head Barbarian!"
end of function

DISPLAY_PLAYER_ATTRIBUTES
define function display_player_attributes that takes no parameters
  print to console each attribute
end function

DISPLAY_MONSTER_APPEARANCE
define function display_monster_appearance that take no parameters
  create a switch with current dungeon
    case 0: to console "describe castle"
    case 1: to console "describe goblin"
    case 2: to console "describe ogre"
    case 3: to console "describe dragon"
    case 4: to console "describe wizard"
    defualt: to console "error, no monster desciption"
end function

TAKE_DAMAGE
define function take_damage that takes an int parameter named damage and an object named charactor
  charactor.health -= damage
end method

ATTACK
define method attach that takes two object parameters
  set rand to a random number between 1 and 6
  add object1.attack to the rand and set attack
  IF object1.attack > object2.defense
    print to console object.name + "'s attack landed for " + attack
    call take_damage(attack,object2)
  ELSE
    print to console "attack missed"
END method

BATTLE
define a function battle that takes no parameters
  display_monster_appearance
  While cur_monster.health!=0 || player.health !=0
    WHILE option != 1 || option!=2
      print "HEALTH: " + player.health
      print "1. attack "
      print "2. use_item"
      prompt for use input and set option with it
      IF option == 1
        attack(player, cur_monster)
      IF ELSE option == 2
        use_item
      ELSE
        print "Not a valid option! Use your head Barbarian!"
    attack(cur_monster, player)
  IF cur_monster.health  <= 0
    print "You killed the " + cur_monster.name
    IF cur_dungeon == 4
      print "You killed that blasted wizard dead! you got a shit ton of gold from his wizard chest!"
      game_done = true
    ELSE
      player.potions++;
      print "you got a health potion"
      cur_monster = monster_array[++cur_dungeon]
  else
    print "You were killed by " + cur_monster
    game_done = true
END method

USE POTION
define a function name use_potion that takes no parameters
  If potions != 0
    print "you healed 5 points"
    if player.health + 5 > 20
      player.health = 20
    else
      player.health = player.health + 5
    potions--
  else
    print "you have no potions to use!"
end method
*/


//character prototype
function character(name, attack, defense, health, potions){
  this.name = name;
  this.attack = attack;
  this.defense =defense;
  this.health = health;
  this.potions = potions;
}

//character objects
var player = new character("Barbarius", 4, 4, 20, 0);
var goblin = new character("Goblin", 0, 2, 8, 1);
var ogre = new character("Ogre", 2, 6, 10, 1);
var dragon = new character("dragon", 5, 6, 15, 1);
var wizard = new character("Wizard", 6, 5, 20, 0);

//dungeon object literal holds dungeon state, story, and monster
var dungeons = {
  0: {
      story:"You approach the castle as lightning bolt cracks down onto the ground in front you. You jump out of the way, narrowly escaping death. You arrive at the front door of the castle, you are ready, the evil wizard will meet his end by your sword on this stormy night...",
      monster:"error no monster"
  },
  1: {
      story: "You open the massive wooden door of the castle. The room smells of rancid meat and is littered with human bones. You carefully enter the dank and musty room. It is very dark and hard to see. A single torch lights the room... Suddenly - a vile goblin leaps from a dark corner to attack you.",
      monster: goblin
  },
  2: {
      story: "That goblin was nothing. More like a weak little imp than a goblin. Hopefully more challenging monsters await The Great Barbarius.You follow the cold stone steps down into a dirty mud filled pit. Waiting and ready stands a massive Ogre.",
      monster: ogre
  },
  3: {
      story: "Close call. That Ogre almost was the end. Fortunately, ogres aren't very fast so you were able gracefully out maneuver him. What could await you in the next room? You reach for the skull shaped door handle - suddenly you recoil, it's hot. You kick the door down. The door falls to the ground - you stand face to face with a dragon. ",
      monster: dragon
  },
  4: {
      story: "You did it. You killed an effin dragon. The evil wizard has to be in the next room. You can sense his presence... and he can sense yours. You carefully step around the limp dragon carcass, covered in dragon blood. You pull the lever next to the double doors and the entrance to the wizard's chambers opens. The wizard comes flying towards you speaking his incantation 'kcatta draziw kcatta draziw'",
      monster: wizard
  }

};


//global variables
var cur_dungeon = 0;
var game_done = false;
var player_turn = true;
var monster;


//display story text based on the current dungeon
function display_story(){
  story = dungeons[cur_dungeon].story;
  display_on_page(story);
}

//display passed parameter to page
function display_on_page(to_display){
  document.getElementById("story_text").innerHTML = to_display;
}

function display_in_battle(to_display){
  document.getElementById("battle_area").innerHTML = to_display;
}

//writes menu to the dom
function display_menu(){
  var menu = '<button type="button" onClick="use_potion()">Use Potion</button><button type="button" onClick="battle()">Next Room</button><button type="button" onClick="exclaim()"">Yell "I\'m coming for you wizard!"</button>';
  display_on_page(menu);
}
display_story();
window.setTimeout(function () {display_menu();}, 7000);


//add damage to characters health
function take_damage(damage, character){
  character.health -= damage;
}
//controls the battle sequence for each enemy encounter
function attack(){
  console.log(cur_dungeon);
  var attacker;
  var defender;
  var self = this;
  console.log(self);
  if (player_turn === true) {
    attacker = player;
    defender = monster;
  }
  else{
    attacker = monster;
    defender = player;
  }
  roll = Math.floor((Math.random() * 6) + 1);
  damage = attacker.attack + roll;
  if (damage > defender.defense){
    display_in_battle(defender.name + " Took " + damage + " damage!");
    take_damage(damage, defender);
  }
  else{
    display_in_battle(attacker.name +"'s Attack missed!");
  }
  console.log(player.health);
  console.log(monster.health);
  if (player.health <= 0) {
     window.setTimeout(function () {self.display_in_battle("You died!");}, 2000);
     cur_dungeon = 0;
     player.health = 20;
     window.setTimeout(function () {self.display_menu();}, 2000);

  }
  else if(monster.health <= 0){
    if(monster.name!="Wizard"){
      window.setTimeout(function () {self.display_in_battle("You defeated the " + monster.name +", and got a health potion!");}, 2000);
      player.potions++;
      window.setTimeout(function () {self.display_menu();}, 2000);
    }
    else{
      window.setTimeout(function () {self.display_in_battle("You defeated the " + monster.name +", and got a shit ton of gold!");}, 2000);
      window.setTimeout(function () {self.display_story("You have destoryed the evil wizard. The people of xi'cagho are free from his tyranical rule!");}, 2000);
    }
  }
  else{
    player_turn = !player_turn;
    if (!player_turn) {
      window.setTimeout(function () {self.display_in_battle('<button type="button" onClick="attack()"><h1>DEFEND</h1></button>');}, 2000);
    }
    else{
      window.setTimeout(function () {self.display_in_battle('<button type="button" onClick="attack()"><h1>ATTACK</h1></button>');}, 2000);
    }
  }


}

//initiates the battle when entering a new room
function battle(){
  cur_dungeon++;
  display_story();
  player_turn = true;
  var self = this;
  console.log(self);
  monster = dungeons[cur_dungeon].monster;
    window.setTimeout(function () {self.display_in_battle('<button type="button" onClick="attack()"><h1>Attack!</h1></button>');}, 2000);
}

//adds to players HP
function use_potion(){
  if (player.potions != 0) {
    display_in_battle("You healed 5 HP!");
    player.health += 5;
    potions--;
  }
  else{
    display_in_battle("You don't have any potions!");
  }
    window.setTimeout(display_menu, 3000);
}

//self explanatory
function exclaim(){
  display_on_page("I'm coming for you wizard!");
  window.setTimeout(display_menu, 3000);
}

//Reflection

// What was the most difficult part of this challenge?

// I had a lot of difficult dealing with the flow of the game. It was
// hard to implement the methods how I wanted to and have the game
// execute properly. I had to implement timers, and learn closures. I had
// lot of issues with the scope of method calls when I wrote HTML code to
// the DOM that executed JavaScript. It really was a handful, but I want
// to come back to again in the future and develop the game into
// something a little better looking and more sophisticated.

// What did you learn about creating objects and functions that interact
// with one another?

// I learned that functions must be defined within in the scope of the
// object if they are to be called from that object. This is why when I
// do method the timeout method calls, I assign the this variable to self
// and pass it into the closure before execution so that the method will
// execute in the proper scope instead of the Window object. I learned a
// lot about how to dynamically create and change objects, and use
// functions to manipulate the data inside of a function.

// Did you learn about any new built-in methods you could use in your
// refactored solution? If so, what were they and how do they work?

// My code is not yet totally refactored. I had so much code and I ran
// out of time to finish refactoring. I did change the code so that the
// battle would write to one div and the story to another to make is
// easier to read and more interesting looking.

// How can you access and manipulate properties of objects? you can
// access objects with dot notation by saying object.property = "changed
// property". You could also use bracket notation like object["property"]
// = "changed value";
