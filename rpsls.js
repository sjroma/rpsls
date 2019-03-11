console.log("Hey Steve, here's what you're logging to the console");

let wins = 0;
let losses = 0;
let ties = 0;
let win_div = document.getElementById("win");
let loss_div = document.getElementById("loss");
let tie_div = document.getElementById("tie");
const userchoice_div = document.getElementById("you-chose");
const compchoice_div = document.getElementById("comp-chose");
const result_div = document.getElementById("result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

//get the computer's choice
function getComp() {
  const rpsls = ["rock", "paper", "scissors", "lizard", "spock"];
  const computer = [Math.floor(Math.random() * rpsls.length)];
  return rpsls[computer];
}
//console.log(getComp());

function userplay(getUser) {
//  console.log("you clicked..." + getUser);
  const compChoice = getComp();
//  console.log("computer choice...",compChoice);
  switch (getUser + compChoice) {
    //user wins
    case "rockscissors":
    case "rocklizard":
    case "paperrock":
    case "paperspock":
    case "scissorspaper":
    case "scissorslizard":
    case "lizardpaper":
    case "lizardspock":
    case "spockrock":
    case "spockscissors":
//      console.log("You win!");
      win(getUser, compChoice);
      break;
    //user loses
    case "rockspock":
    case "rockpaper":
    case "paperscissors":
    case "paperlizard":
    case "scissorsrock":
    case "scissorsspock":
    case "lizardrock":
    case "lizardscissors":
    case "spockpaper":
    case "spocklizard":
//      console.log("You lose!");
      loss(getUser, compChoice);
      break;
    //default is a tie
    default:
//      console.log("It's a tie!");
      tie(getUser, compChoice);
      break;
  }
}

function win(user, computer) {
  wins++;
//  console.log(wins);
  win_div.innerHTML = wins;
//  console.log(user);
//  console.log(computer);
  if (user === "rock" && computer === "scissors") {
    userchoice_div.innerHTML = user + " crushes";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  } else if (user === "rock" && computer === "lizard") {
    userchoice_div.innerHTML = user + " crushes";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  }
  else if (user === "paper" && computer === "rock") {
    userchoice_div.innerHTML = user + " covers";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  }
  else if (user === "paper" && computer === "spock") {
    userchoice_div.innerHTML = user + " disproves";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  }
  else if (user === "scissors" && computer === "paper") {
    userchoice_div.innerHTML = user + " cuts";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  }
  else if (user === "scissors" && computer === "lizard") {
    userchoice_div.innerHTML = user + " decapitates";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  }
  else if (user === "lizard" && computer === "paper") {
    userchoice_div.innerHTML = user + " eats";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  }
  else if (user === "lizard" && computer === "spock") {
    userchoice_div.innerHTML = user + " poisons";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  }
  else if (user === "spock" && computer === "rock") {
    userchoice_div.innerHTML = user + " vaporizes";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  }
  else {
    userchoice_div.innerHTML = user + " crushes";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You win!"
  }
}

function loss(user, computer) {
  losses++;
  loss_div.innerHTML = losses;
  if (user === "rock" && computer === "spock") {
    userchoice_div.innerHTML = user + " is vaporized by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  } else if (user === "rock" && computer === "paper") {
    userchoice_div.innerHTML = user + " is covered by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  }
  else if (user === "paper" && computer === "scissors") {
    userchoice_div.innerHTML = user + " is cut by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  }
  else if (user === "paper" && computer === "lizard") {
    userchoice_div.innerHTML = user + " is eaten by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  }
  else if (user === "scissors" && computer === "rock") {
    userchoice_div.innerHTML = user + " are crushed by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  }
  else if (user === "scissors" && computer === "spock") {
    userchoice_div.innerHTML = user + " are smashed by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  }
  else if (user === "lizard" && computer === "rock") {
    userchoice_div.innerHTML = user + " is crushed by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  }
  else if (user === "lizard" && computer === "scissors") {
    userchoice_div.innerHTML = user + " is decapitated by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  }
  else if (user === "spock" && computer === "paper") {
    userchoice_div.innerHTML = user + " is disproved by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  }
  else {
    userchoice_div.innerHTML = user + " is poisoned by";
    compchoice_div.innerHTML = computer;
    result_div.innerHTML = "You lose!"
  }
}

function tie(user, computer) {
  ties++;
  tie_div.innerHTML = ties;
  userchoice_div.innerHTML = "You both chose " + user;
  compchoice_div.innerHTML = "";
  result_div.innerHTML = "You've tied!"
}

//get the player's choice
function gameplay() {
  rock_div.addEventListener("click", function() {
    userplay("rock");
  })
  
  paper_div.addEventListener("click", function() {
    userplay("paper");
  })
  
  scissors_div.addEventListener("click", function() {
    userplay("scissors");
  })
  
  lizard_div.addEventListener("click", function() {
    userplay("lizard");
  })
  
  spock_div.addEventListener("click", function() {
    userplay("spock");
  })
}

gameplay();
