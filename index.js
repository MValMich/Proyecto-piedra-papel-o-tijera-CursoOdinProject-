
// PROJECTO: Piedra, papel o tijera.

function obtenerJugadaAletoria() {
  const opciones = ['piedra', 'papel', 'tijera']
  const jugadaAleatoria = Math.floor(Math.random() *3)
  return opciones[jugadaAleatoria]
}
// console.log(obtenerJugadaAletoria())
function obtenerGanador(juagadaJugador, jugadaPC) {
  if (juagadaJugador === jugadaPC)
  return 'empate'
  else if (
    (juagadaJugador === 'piedra' && jugadaPC === 'tijera') ||
    (juagadaJugador === 'tijera' && jugadaPC === 'papel') ||
    (juagadaJugador === 'papel' && jugadaPC === 'piedra')
  )
  return 'jugador'
  else return 'computador'
}
// console.log(obtenerGanador('piedra', 'tijera'))
// console.log(obtenerGanador('tijera', 'papel'))
// console.log(obtenerGanador('papel', 'piedra'))
// console.log(obtenerGanador('piedra', 'piedra'))
// console.log(obtenerGanador('piedra', 'papel'))
let victorias = 0
let derrotas = 0

for (let i = 0; i < 5; i++) {
    const jugadaJugador = prompt ('Elije piedra, papel o tijera').toLocaleLowerCase()
    const jugadaPC = obtenerJugadaAletoria()
    console.log('el Computador a elejido: ' + jugadaPC)
    const resultado = obtenerGanador(jugadaJugador,jugadaPC)
    
    if (resultado === 'jugador')
    victorias++
    else if (resultado === 'computador')
    derrotas++
}

if (victorias > derrotas)
console.log ('Has Ganado!!!')
else if (victorias < derrotas)
console.log ('Has Perdido')
else console.log ('Empate')

// const promedio = victorias / 5;
// console.log("Promedio de victorias: " + promedio);
// console.log("Promedio de derrotas: " + (1 - promedio));





// JUEGO: PIEDRA, PAPEL O TIJERA (Alternativa 2)

// let pcChoice = Number

// function getComputerChoice(pcChoice, playerChoice) {
//   let pcChoice_2 = Math.floor(Math.random(pcChoice) * 3 + 1)
  
//   if (pcChoice_2 === 1) pcChoice_2 = 'piedra'
//   else if (pcChoice_2 === 2) pcChoice_2 = 'papel'
//   if (pcChoice_2 === 3) pcChoice_2 = 'tijera'
//   return pcChoice_2

//   if (playerChoice = /piedra/i  && pcChoice_2 === 'piedra' || 
//   playerChoice == /papel/i && pcChoice_2 === 'papel' ||
//   playerChoice == /tijera/i && pcChoice_2 === 'tijera'
//   ) 
// return 'ES UN EMPATE'

// if (playerChoice = /piedra/i  && pcChoice_2 === 'papel' || 
// playerChoice == /papel/i && pcChoice_2 === 'tijera' ||
// playerChoice == /tijera/i && pcChoice_2 === 'piedra'
// ) 

// if (playerChoice = /piedra/i && pcChoice_2 === 'tijera' || 
// playerChoice == /papel/i && pcChoice_2 === 'piedra' ||
// playerChoice == /tijera/i && pcChoice_2 === 'papel'
// ) 
// return 'HAS GANADO, FELICIDADES !!!'
// }

// console.log(getComputerChoice(pcChoice, /pieDRA/))
// console.log(getComputerChoice(pcChoice, /papel/))
// console.log(getComputerChoice(pcChoice, /TIJERA/))

// FIN DE LA FUNCIÓN


