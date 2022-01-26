console.log("tic tac toe game");




//game board that everything checks to see if moves are legal,
//game is over, etc.
let gameBoard = [
                    '','','',
                    '','','',
                    '','',''
                ];

//emptey array to easily reset the original game board
let gameBoardRestart = [
                    '','','',
                    '','','',
                    '','',''
                ];


//x = 1, o = 0

//when button w specific ID is clicked, corresponding function takes place
//changes button inner html, changes value of game board array to 1
TL.onclick = function topLeft () {
    console.log('topLeft clicked');
    document.querySelector('#TL').innerHTML = 'X';
    gameBoard[0] = 1;
    console.log(gameBoard);
}

TM.onclick = function topMiddle () {
    console.log('topMiddle clicked');
    document.querySelector('#TM').innerHTML = 'X';
    gameBoard[1] = 1;
    console.log(gameBoard);
}

TR.onclick = function topRight () {
    console.log('topRight clicked');
    document.querySelector('#TR').innerHTML = 'X';
    gameBoard[2] = 1;
    console.log(gameBoard);
}

ML.onclick = function MiddleLeft () {
    console.log('MiddleLeft clicked');
    document.querySelector('#ML').innerHTML = 'X';
    gameBoard[3] = 1;
    console.log(gameBoard);
}

MM.onclick = function middleMiddle () {
    console.log('middleMiddle clicked');
    document.querySelector('#MM').innerHTML = 'X';
    gameBoard[4] = 1;
    console.log(gameBoard);
}

MR.onclick = function middleRight () {
    console.log('middleRight clicked');
    document.querySelector('#MR').innerHTML = 'X';
    gameBoard[5] = 1;
    console.log(gameBoard);
}

BL.onclick = function bottomLeft () {
    console.log('bottomLeft clicked');
    document.querySelector('#BL').innerHTML = 'X';
    gameBoard[6] = 1;
    console.log(gameBoard);
}

BM.onclick = function bottomMiddle () {
    console.log('bottomMiddle clicked');
    document.querySelector('#BM').innerHTML = 'X';
    gameBoard[7] = 1;
    console.log(gameBoard);
}

BR.onclick = function bottomRight () {
    console.log('bottomRight clicked');
    document.querySelector('#BR').innerHTML = 'X';
    gameBoard[8] = 1;
    console.log(gameBoard);
}

//restart button, clears all buttons inner html, resets game board array
restartButton.onclick = function restartGame () {
    console.log('restartButton clicked');
    document.querySelector('#TL').innerHTML = '';
    document.querySelector('#TM').innerHTML = '';
    document.querySelector('#TR').innerHTML = '';
    document.querySelector('#ML').innerHTML = '';
    document.querySelector('#MM').innerHTML = '';
    document.querySelector('#MR').innerHTML = '';
    document.querySelector('#BL').innerHTML = '';
    document.querySelector('#BM').innerHTML = '';
    document.querySelector('#BR').innerHTML = '';
    gameBoard = gameBoardRestart;
}