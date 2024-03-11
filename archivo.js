
// PROJECTO: Piedra, papel o tijera.

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound() {
    const playerSelection = document.getElementById('playerChoice').value.toLowerCase();
    
    if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
        alert('Invalid choice. Please enter "rock", "paper", or "scissors".');
        return;
    }

    const computerSelection = getComputerChoice();

    const result = determineWinner(playerSelection, computerSelection);

    const playerListItem = document.createElement('li');
    playerListItem.textContent = `Round ${roundsPlayed + 1}: You chose ${playerSelection}, Computer chose ${computerSelection}. ${result}`;
    document.getElementById('resultsList').appendChild(playerListItem);

    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }

    roundsPlayed++;

    if (roundsPlayed === 5) {
        showFinalResult();
    }
}

function determineWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function showFinalResult() {
    const finalResult = document.getElementById('finalResult');
    if (playerScore > computerScore) {
        finalResult.textContent = "CONGRATULATION! You WIN the game!";
    } else if (playerScore < computerScore) {
        finalResult.textContent = "SORRY, you LOSE the game.";
    } else {
        finalResult.textContent = "It's a TIE!";
    }

    setTimeout(resetGame, 8000); // Reset the game after 2 seconds
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    document.getElementById('finalResult').textContent = '';
    document.getElementById('resultsList').innerHTML = '';
}

const button = document.querySelector('button')
button.addEventListener('click', playRound)

// function obtenerJugadaAletoria() {
//   const opciones = ['piedra', 'papel', 'tijera']
//   const jugadaAleatoria = Math.floor(Math.random() *3)
//   return opciones[jugadaAleatoria]
// }
// console.log(obtenerJugadaAletoria())
// function obtenerGanador(juagadaJugador, jugadaPC) {
//   if (juagadaJugador === jugadaPC)
//   return 'empate'
//   else if (
//     (juagadaJugador === 'piedra' && jugadaPC === 'tijera') ||
//     (juagadaJugador === 'tijera' && jugadaPC === 'papel') ||
//     (juagadaJugador === 'papel' && jugadaPC === 'piedra')
//   )
//   return 'jugador'
//   else return 'computador'
// }
// console.log(obtenerGanador('piedra', 'tijera'))
// console.log(obtenerGanador('tijera', 'papel'))
// console.log(obtenerGanador('papel', 'piedra'))
// console.log(obtenerGanador('piedra', 'piedra'))
// console.log(obtenerGanador('piedra', 'papel'))
// let victorias = 0
// let derrotas = 0


// for (let i = 0; i < 5; i++) {
//     const jugadaJugador = prompt ('Elije piedra, papel o tijera').toLocaleLowerCase()
//     const jugadaPC = obtenerJugadaAletoria()
//     console.log('el Computador a elejido: ' + jugadaPC)
//     const resultado = obtenerGanador(jugadaJugador,jugadaPC)
    
//     if (resultado === 'jugador')
//     victorias++
//     else if (resultado === 'computador')
//     derrotas++
// }

// if (victorias > derrotas)
// console.log ('Has Ganado!!!')
// else if (victorias < derrotas)
// console.log ('Has Perdido')
// else console.log ('Empate')

// const promedio = victorias / 5;
// console.log("Promedio de victorias: " + promedio);
// console.log("Promedio de derrotas: " + (1 - promedio));







