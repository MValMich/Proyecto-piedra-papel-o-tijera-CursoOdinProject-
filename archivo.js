
// Función para obtener la elección aleatoria de la computadora
function obtenerSeleccionComputador() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const seleccion = Math.floor(Math.random() * 3);
  return opciones[seleccion];
}

// Función para una ronda del juego
function jugarRonda(seleccionJugador, seleccionComputador) {
  seleccionJugador = seleccionJugador.toLowerCase();
  if (seleccionJugador === seleccionComputador)
  return '¡EMPATE!' 
  if (
    (seleccionJugador === 'piedra' && seleccionComputador === 'tijera') ||
    (seleccionJugador === 'papel' && seleccionComputador === 'piedra') ||
    (seleccionJugador === 'tijera' && seleccionComputador === 'papel')
  )
   return '¡GANASTE! ' + seleccionJugador + ' vence a ' + seleccionComputador 
  if (
    (seleccionJugador === 'piedra' && seleccionComputador === 'papel') ||
    (seleccionJugador === 'papel' && seleccionComputador === 'tijera') ||
    (seleccionJugador === 'tijera' && seleccionComputador === 'piedra')
  ) 
  return '¡PERDISTE! ' +  seleccionComputador + ' vence a ' + seleccionJugador
} 

// Lógica del juego para jugar un número específico de rondas
let victorias = 0;
let derrotas = 0;
function jugarJuego(seleccionJugador) {

  const seleccionComputador = obtenerSeleccionComputador();
  const resultado = jugarRonda(seleccionJugador, seleccionComputador);
  if (resultado === '¡GANASTE! ' + seleccionJugador + ' vence a ' + seleccionComputador) 
  victorias ++
  else if (resultado === '¡PERDISTE! ' + seleccionComputador + ' vence a ' +  seleccionJugador)
  derrotas ++ 
  
//   document.querySelector('#resultado').textContent = resultado +'    '+'victorias:'+victorias+ '    derrotas:'+derrotas ;

const divResult = document.querySelector('#divResult')
const Result = document.createElement('div')
  Result.textContent = resultado +'    '+ '(victorias: '+ victorias + ' / derrotas: '+ derrotas +')'
  Result.setAttribute('style',' font-weight: bold; color: orange')
  divResult.append(Result)
                        
  if (victorias === 5 || derrotas === 5) {
      if (victorias === 5) { 
        const Ganaste = document.createElement('div')
                            Ganaste.textContent = ('¡GANASTE EL JUEGO!')
                            Ganaste.setAttribute('style', 'font-size: 50px; font-weight: bold; color: yellow')
                            divResult.appendChild(Ganaste) }
        else {
            const Perdiste = document.createElement('div')
                            Perdiste.textContent = ('¡PERDISTE EL JUEGO!')
                            Perdiste.setAttribute('style', 'font-size: 30px; font-weight: bold;  color: red')
                            divResult.appendChild(Perdiste) }                           
    victorias = 0;
    derrotas = 0;
  } 
  }

// Event listeners para los botones
const piedra = document.querySelector('#piedra')
piedra.addEventListener('click', ()=>{
  jugarJuego('piedra')
});

const papel = document.querySelector('#papel')
papel.addEventListener('click', ()=>{
 jugarJuego('papel')
});

const tijera = document.querySelector('#tijera')
tijera.addEventListener('click', ()=>{
  jugarJuego('tijera');
});

// // Event listener para todos los botones

// // const botones = document.querySelectorAll('button');
// // botones.forEach((button) => {
// //   button.addEventListener('click', function(event) {
// //     const seleccionJugador = event.target.id;
// //     jugarJuego(seleccionJugador, 5); // Jugar 5 rondas
// //   });
// // });

///////////////////////////////////////////////////////////////
// ALTERNATIVA 2

// let playerScore = 0;
// let computerScore = 0;
// let roundsPlayed = 0;

// function getComputerChoice() {
//     const choices = ['Rock', 'Paper', 'Scissors'];
//     const randomNumber = Math.floor(Math.random() * 3);
//     return choices[randomNumber];
// }

// function playRound() {
//     const playerSelection = document.getElementById('playerChoice').value.toLowerCase();
    
//     if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
//         alert('Invalid choice. Please enter "rock", "paper", or "scissors".');
//         return;
//     }
//     const computerSelection = getComputerChoice();

//     const result = determineWinner(playerSelection, computerSelection);

//     const playerListItem = document.createElement('li');
//     playerListItem.textContent = `Round ${roundsPlayed + 1}: You chose ${playerSelection}, Computer chose ${computerSelection}. ${result}`;
//     document.getElementById('resultsList').appendChild(playerListItem);

//     if (result.includes("Win")) {
//         playerScore++;
//     } else if (result.includes("Lose")) {
//         computerScore++;
//     }

//     roundsPlayed++;

//     if (roundsPlayed === 5) {
//         showFinalResult();
//     }
//  }

// function determineWinner(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     computerSelection = computerSelection.toLowerCase();

//     if (playerSelection === computerSelection) {
//         return "It's a tie!";
//     } else if (
//         (playerSelection === 'rock' && computerSelection === 'scissors') ||
//         (playerSelection === 'paper' && computerSelection === 'rock') ||
//         (playerSelection === 'scissors' && computerSelection === 'paper')
//     ) {
//         return `You Win! ${playerSelection} beats ${computerSelection}.`;
//     } else {
//         return `You Lose! ${computerSelection} beats ${playerSelection}.`;
//     }
// }

// function showFinalResult() {
//     const finalResult = document.getElementById('finalResult');
//     if (playerScore > computerScore) {
//         finalResult.textContent = "CONGRATULATION! You WIN the game!";
//     } else if (playerScore < computerScore) {
//         finalResult.textContent = "SORRY, you LOSE the game.";
//     } else {
//         finalResult.textContent = "It's a TIE!";
//     }

//     setTimeout(resetGame, 8000); // Reset the game after 2 seconds
// }

// function resetGame() {
//     playerScore = 0;
//     computerScore = 0;
//     roundsPlayed = 0;
//     document.getElementById('finalResult').textContent = '';
//     document.getElementById('resultsList').innerHTML = '';
// }

// const button = document.querySelector('button')
// button.addEventListener('click', playRound)

////////////////////////////////////////////////////////////////////
// ALTERNATIVA 3 

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







