const usersChoice = document.createElement('h1');
const computersChoice = document.createElement('h1');
const resultDisplay = document.createElement('h1');
/*encontrando el section de HTML que tiene el id = "root"*/ 
const gameGrid = document.getElementById('root');

gameGrid.append(usersChoice);
gameGrid.append(computersChoice);
gameGrid.append(resultDisplay);

const Choices = ['Piedra','Papel','Tijera'];
let userChoice;
let computerChoice;

const generateComputerPlay = () =>{
    const randomChoice = Choices[Math.floor(Math.random()*Choices.length)];
    computerChoice =randomChoice;
    computersChoice.innerHTML = `la jugada de la computadora es :${computerChoice}`; 
}

const generateResult = () =>{
    switch(userChoice+computerChoice){
        case 'TijeraPapel':
        case 'PiedraTijera':
        case 'PapelPiedra':
            resultDisplay.innerHTML = 'Gano el usuario';
            break;
        case 'PiedraPapel':
        case 'TijeraPiedra':
        case 'PapelTijera': 
            resultDisplay.innerHTML = 'Perdio el usuario';
            break;
        default:
            resultDisplay.innerHTML = 'Es un empate';
            break;
    }
}
const handleClick = e =>{
    userChoice = e.target.id;
    usersChoice.innerHTML ='Su jugada es '+userChoice;
    generateComputerPlay();
    generateResult();
}

for (let index = 0; index < Choices.length;index++){
    const button = document.createElement('button');
    button.id = Choices[index];
    button.innerHTML = Choices[index];
    //cuando le haga el click llama a la funcion handleClick
    button.addEventListener('click',handleClick);
    gameGrid.appendChild(button);
}