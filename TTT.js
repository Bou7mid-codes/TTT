/* 
* Create an array :


* Randomize the computer turns using Math.random and array indices:
  => a function to get random number.
  => use random numbers as index to choose position of computer play
  => if position is used then it CANNOT be played


* Use flow control to determine the winning conditions and announcements:
  -----0,1,2-----3,4,5------6,7,8--
  -----0,3,6-----1,4,7------2,5,8--
  -----0,4,8-----2,4,6---


// onclick the space is used for X (e.g: let spaceUsed = true;)
// after computer turn also space is used... 

// setTimeOut between player Turn and computer turn

// announcement of whose current turn it is. saved in a variable and injected to innerHTML.

// winner announcement

*/

//--------------------------Game ARRAY-------------------------------------------------------

//const tttArray = [['a','a','a'],['a','a','a'],['a','a','a']];
const tttArray = ['','','','','','','','',''];


//---------------------------------Current Turn announcement-----------------------------

const turnSignElem = document.querySelector('.js-turn-sign');

let currentPlayer = 'Let\'s play!';
turnSignElem.innerHTML = currentPlayer;

const announceTurn = (currentPlayer)=> {
  turnSignElem.innerHTML = currentPlayer;
}

//---------------------------------Winning conditions------------------------------------
let is_winner = false;

function winCondition(winner){

  const [a,b,c,d,e,f,g,h,i] = tttArray;
  if( a && (a===b && b===c) || 
    d && (d===e && e===f) ||
    g && (g===h && h===i) ||
    a && (a===d && d===g) ||
    b && (b===e && e===h) ||
    c && (c===f && f===i) ||
    a && (a===e && e===i) ||
    c && (c===e && e===g)){
    is_winner = true;
    document.querySelector('.js-winner-announce').innerHTML = `${winner} the winner! Well done!!`;
    announceTurn('Game Over!')
  } else if(a&&b&&c&&d&&e&&f&&g&&h&&i){
    is_winner = true;
    document.querySelector('.js-winner-announce').innerHTML = `It\'s a tie!`;
    announceTurn('Game Over!');
  }
}

//---------------Random Number Generator--------------------------------------------------------

const randomNumber = (max) => Math.round(Math.random()* max);


//----------------------game buttons-----------------------------------------------------------



const tttBlock1 = document.querySelector('.js-index-0');
const tttBlock2 = document.querySelector('.js-index-1');
const tttBlock3 = document.querySelector('.js-index-2');
const tttBlock4 = document.querySelector('.js-index-3');
const tttBlock5 = document.querySelector('.js-index-4');
const tttBlock6 = document.querySelector('.js-index-5');
const tttBlock7 = document.querySelector('.js-index-6');
const tttBlock8 = document.querySelector('.js-index-7');
const tttBlock9 = document.querySelector('.js-index-8');

tttBlock1.addEventListener('click', () => playerPlay(0));
tttBlock2.addEventListener('click', () => playerPlay(1));
tttBlock3.addEventListener('click', () => playerPlay(2));
tttBlock4.addEventListener('click', () => playerPlay(3));
tttBlock5.addEventListener('click', () => playerPlay(4));
tttBlock6.addEventListener('click', () => playerPlay(5));
tttBlock7.addEventListener('click', () => playerPlay(6));
tttBlock8.addEventListener('click', () => playerPlay(7));
tttBlock9.addEventListener('click', () => playerPlay(8));

//------------------------Play game function------------------------------------
let is_my_turn = true;
function playerPlay(i){
  if(is_my_turn){
    if(!is_winner){
      if(!tttArray[i]) {

        tttArray[i] = 'X';
        
        document.querySelector(`.js-index-${i}`).innerHTML = tttArray[i];
        announceTurn('Computer\'s turn');

        is_my_turn = false;

        winCondition('YOU are');

        setTimeout(cpuPlay, 2000);

      }else {
        return;
      }
    }
  }
}


//------------------------------Cpu play function-----------------------------------------

function cpuPlay(){

  if(!is_winner){
    let indiceArr = [];

    tttArray.forEach((item, index) => {
      if(!item)
      indiceArr.push(index);
    }
    );

    if(indiceArr.length > 0){

      const i = randomNumber(indiceArr.length -1);

      tttArray[indiceArr[i]] = 'O';

      document.querySelector(`.js-index-${indiceArr[i]}`)
        .innerHTML = tttArray[indiceArr[i]];

      announceTurn('Your turn');
    }
    is_my_turn = true;
    winCondition('COMPUTER is');
  }
};

