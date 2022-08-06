let playerAttack;
let enemyAttack;
let playerLives = 3;
let enemyLives = 3;

function gameStart() {
  let attackSection = document.getElementById("select-attack");
  attackSection.style.display = "none";

  let restartSection = document.getElementById("restart");
  restartSection.style.display = "none";

  let petButton = document.getElementById("button-pet");
  petButton.addEventListener("click", selectPlayerPet);

  let fireButton = document.getElementById("button-fire");
  fireButton.addEventListener("click", fireAttack);
  let waterButton = document.getElementById("button-water");
  waterButton.addEventListener("click", waterAttack);
  let earthButton = document.getElementById("button-earth");
  earthButton.addEventListener("click", earthAttack);

  let restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", gameRestart);
}

function selectPlayerPet() {
  let attackSection = document.getElementById("select-attack");
  attackSection.style.display = "flex";
  let selectPetSection = document.getElementById("select-pet");
  selectPetSection.style.display = "none";

  let hipodogeInput = document.getElementById("hipodoge");
  let capipepoInput = document.getElementById("capipepo");
  let ratigueyaInput = document.getElementById("ratigueya");
  let spanPlayerPet = document.getElementById("player-pet");

  if (hipodogeInput.checked) {
    spanPlayerPet.innerHTML = "Hipodoge";
  } else if (capipepoInput.checked) {
    spanPlayerPet.innerHTML = "Capipepo";
  } else if (ratigueyaInput.checked) {
    spanPlayerPet.innerHTML = "Ratigueya";
  } else {
    alert("You didn't select a pet!");
  }

  selectEnemyPet();
}

function selectEnemyPet() {
  let aleatoryPet = aleatory(1, 3);
  let spanEnemyPet = document.getElementById("enemy-pet");

  if (aleatoryPet == 1) {
    spanEnemyPet.innerHTML = "Hipodoge";
  } else if (aleatoryPet == 2) {
    spanEnemyPet.innerHTML = "Capipepo";
  } else {
    spanEnemyPet.innerHTML = "Ratigueya";
  }
}

function fireAttack() {
  playerAttack = "FIRE";
  enemyAleatoryAttack();
}

function waterAttack() {
  playerAttack = "WATER";
  enemyAleatoryAttack();
}

function earthAttack() {
  playerAttack = "EARTH";
  enemyAleatoryAttack();
}

function enemyAleatoryAttack() {
  let aleatoryAttack = aleatory(1, 3);
  if (aleatoryAttack == 1) {
    enemyAttack = "FIRE";
  } else if (aleatoryAttack == 2) {
    enemyAttack = "WATER";
  } else {
    enemyAttack = "EARTH";
  }

  combat();
}

function combat() {
  let spanPlayerLives = document.getElementById("player-lives");
  let spanEnemyLives = document.getElementById("enemy-lives");

  if (enemyAttack == playerAttack) {
    createMessage("tie");
  } else if (playerAttack == "FIRE" && enemyAttack == "EARTH") {
    enemyLives--;
    spanEnemyLives.innerHTML = enemyLives;
    createMessage("You Win");
  } else if (playerAttack == "WATER" && enemyAttack == "FIRE") {
    enemyLives--;
    spanEnemyLives.innerHTML = enemyLives;
    createMessage("You Win");
  } else if (playerAttack == "EARTH" && enemyAttack == "WATER") {
    enemyLives--;
    spanEnemyLives.innerHTML = enemyLives;
    createMessage("You Win");
  } else {
    createMessage("You lose");
    playerLives--;
    spanPlayerLives.innerHTML = playerLives;
  }

  livesReview();
}

function livesReview() {
  if (enemyLives == 0) {
    finalMessage("Congratulations!!! you won");
  } else if (playerLives == 0) {
    finalMessage("Sorry, you Lose");
  }
}

function createMessage(result) {
  let messageSection = document.getElementById("results");
  let playerAttacks = document.getElementById("player-attacks");
  let enemyAttacks = document.getElementById("enemy-attacks");

  let newPlayerAttack = document.createElement("p");
  let newEnemyAttack = document.createElement("p");
  let notification = document.createElement("p");

  messageSection.innerHTML = result;
  newPlayerAttack.innerHTML = playerAttack;
  newEnemyAttack.innerHTML = enemyAttack;

  playerAttacks.appendChild(newPlayerAttack);
  enemyAttacks.appendChild(newEnemyAttack);
}

function finalMessage(finalResult) {
  let messageSection = document.getElementById("results");

  messageSection.innerHTML = finalResult;

  let fireButton = document.getElementById("button-fire");
  fireButton.disabled = true;
  let waterButton = document.getElementById("button-water");
  waterButton.disabled = true;
  let earthButton = document.getElementById("button-earth");
  earthButton.disabled = true;

  let restartSection = document.getElementById("restart");
  restartSection.style.display = "block";
}

function gameRestart() {
  location.reload();
}

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", gameStart);
