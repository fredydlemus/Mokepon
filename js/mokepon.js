const attackSection = document.getElementById("select-attack");
const restartSection = document.getElementById("restart");
const petButton = document.getElementById("button-pet");
const fireButton = document.getElementById("button-fire");
const waterButton = document.getElementById("button-water");
const earthButton = document.getElementById("button-earth");
const restartButton = document.getElementById("button-restart");

const selectPetSection = document.getElementById("select-pet");
const hipodogeInput = document.getElementById("hipodoge");
const capipepoInput = document.getElementById("capipepo");
const ratigueyaInput = document.getElementById("ratigueya");
const spanPlayerPet = document.getElementById("player-pet");

const spanEnemyPet = document.getElementById("enemy-pet");

const spanPlayerLives = document.getElementById("player-lives");
const spanEnemyLives = document.getElementById("enemy-lives");

const messageSection = document.getElementById("results");
const playerAttacks = document.getElementById("player-attacks");
const enemyAttacks = document.getElementById("enemy-attacks");

let playerAttack;
let enemyAttack;
let playerLives = 3;
let enemyLives = 3;

function gameStart() {
  attackSection.style.display = "none";
  restartSection.style.display = "none";
  petButton.addEventListener("click", selectPlayerPet);
  fireButton.addEventListener("click", fireAttack);
  waterButton.addEventListener("click", waterAttack);
  earthButton.addEventListener("click", earthAttack);
  restartButton.addEventListener("click", gameRestart);
}

function selectPlayerPet() {
  attackSection.style.display = "flex";
  selectPetSection.style.display = "none";

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
  messageSection.innerHTML = finalResult;

  fireButton.disabled = true;
  waterButton.disabled = true;
  earthButton.disabled = true;

  restartSection.style.display = "block";
}

function gameRestart() {
  location.reload();
}

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", gameStart);
