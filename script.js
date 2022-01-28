console.log("tic tac toe game");


var gameBoardModule = (function() {
    'use strict';


    //game board that everything checks to see if moves are legal,
    //game is over, etc.
    let gameBoard = [
                        0,0,0,
                        0,0,0,
                        0,0,0
                    ];


    let gameOver = false;

    //x = 1, o = 2, empty slot = 0

    function computerTurn () {
        let randomBoard = Math.floor(Math.random()*9);

        if (gameBoard[randomBoard] == 0 && gameOver == false) {
            gameBoard[randomBoard] = 2;
            document.querySelector('#board'+randomBoard).innerHTML = 'O'; 
        }
        else if (gameOver == false) {
            computerTurn();
        }
    }

    //restart button, clears all buttons inner html, resets game board array
    restartButton.onclick = function restartGame () {
        console.log('restartButton clicked or game ended');
        document.querySelector('#board0').innerHTML = '';
        document.querySelector('#board1').innerHTML = '';
        document.querySelector('#board2').innerHTML = '';
        document.querySelector('#board3').innerHTML = '';
        document.querySelector('#board4').innerHTML = '';
        document.querySelector('#board5').innerHTML = '';
        document.querySelector('#board6').innerHTML = '';
        document.querySelector('#board7').innerHTML = '';
        document.querySelector('#board8').innerHTML = '';
        gameBoard = [
                        0,0,0,
                        0,0,0,
                        0,0,0
                    ];
        gameOver = false;
        document.querySelector('#topBox').innerHTML = 'Tic-Tac-Toe';
    }

    

    function checkWinner () {
        console.log('winner checked');
        let gameBoardSum = gameBoard.reduce((a,b) => a+b, 0)

        if (gameBoard[0] != 0 &&
            gameBoard[0] == gameBoard[1] &&
            gameBoard[1] == gameBoard[2]
            ||
            gameBoard[3] != 0 &&
            gameBoard[3] == gameBoard[4] &&
            gameBoard[4] == gameBoard[5]
            ||
            gameBoard[6] != 0 &&
            gameBoard[6] == gameBoard[7] &&
            gameBoard[7] == gameBoard[8]
            ||
            gameBoard[0] != 0 &&
            gameBoard[0] == gameBoard[3] &&
            gameBoard[3] == gameBoard[6]
            ||
            gameBoard[1] != 0 &&
            gameBoard[1] == gameBoard[4] &&
            gameBoard[4] == gameBoard[7]
            ||
            gameBoard[2] != 0 &&
            gameBoard[2] == gameBoard[5] &&
            gameBoard[5] == gameBoard[8]
            ||
            gameBoard[0] != 0 &&
            gameBoard[0] == gameBoard[4] &&
            gameBoard[4] == gameBoard[8]
            ||
            gameBoard[2] != 0 &&
            gameBoard[2] == gameBoard[4] &&
            gameBoard[4] == gameBoard[6]
            
        ) {
            console.log('game over');
            gameOver = true;

            if (gameBoardSum == 7 || gameBoardSum == 10 || gameBoardSum == 13) {
                console.log('x wins!')
                document.querySelector('#topBox').innerHTML = 'X Wins!';
            }

            else if (gameBoardSum == 9 || gameBoardSum == 12)
            {
                console.log('o wins!')
                document.querySelector('#topBox').innerHTML = 'O Wins!';
            }            
        }

        else if (gameBoardSum == 13)
        {
            document.querySelector('#topBox').innerHTML = 'Tie!';
            gameOver = true;
        }
    }

    //when button w specific ID is clicked, corresponding function takes place
    //changes button inner html, changes value of game board array to 1
    board0.onclick = function topLeft () {

        //if array at this spot == 0
        if (gameBoard[0] == 0 && gameOver == false) {
            console.log('topLeft clicked');
            document.querySelector('#board0').innerHTML = 'X';
            gameBoard[0] = 1;
            //console.log(gameBoard);
            checkWinner();
            computerTurn();
            checkWinner();
        }

        //else send message saying you cant go there
        else {
            console.log('you cant go here')
        }
    }

    board1.onclick = function topMiddle () {


        //if array at this spot == 0
        if (gameBoard[1] == 0 && gameOver == false) {
            console.log('topMiddle clicked');
            document.querySelector('#board1').innerHTML = 'X';
            gameBoard[1] = 1;
            //console.log(gameBoard);
            checkWinner();
            computerTurn();
            checkWinner();
    
        }

        //else send message saying you cant go there
        else {
            console.log('you cant go here')
        }
    }

    board2.onclick = function topRight () {

        //if array at this spot == 0
        if (gameBoard[2] == 0 && gameOver == false) {
            console.log('topRight clicked');
            document.querySelector('#board2').innerHTML = 'X';
            gameBoard[2] = 1;
            //console.log(gameBoard);
            checkWinner();
            computerTurn();
            checkWinner();
    
        }

        //else send message saying you cant go there
        else {
            console.log('you cant go here')
        }
    }

    board3.onclick = function MiddleLeft () {

        //if array at this spot == 0
        if (gameBoard[3] == 0 && gameOver == false) {
            console.log('MiddleLeft clicked');
            document.querySelector('#board3').innerHTML = 'X';
            gameBoard[3] = 1;
            //console.log(gameBoard);
            checkWinner();
            computerTurn();
            checkWinner();
    
        }

        //else send message saying you cant go there
        else {
            console.log('you cant go here')
        }
    }

    board4.onclick = function middleMiddle () {

        //if array at this spot == 0
        if (gameBoard[4] == 0 && gameOver == false) {
            console.log('middleMiddle clicked');
            document.querySelector('#board4').innerHTML = 'X';
            gameBoard[4] = 1;
            //console.log(gameBoard);
            checkWinner();
            computerTurn();
            checkWinner();
    
        }

        //else send message saying you cant go there
        else {
            console.log('you cant go here')
        }
    }

    board5.onclick = function middleRight () {

        //if array at this spot == 0
        if (gameBoard[5] == 0 && gameOver == false) {
            console.log('middleRight clicked');
            document.querySelector('#board5').innerHTML = 'X';
            gameBoard[5] = 1;
            //console.log(gameBoard);
            checkWinner();
            computerTurn();
            checkWinner();
    
        }

        //else send message saying you cant go there
        else {
            console.log('you cant go here')
        }
    }

    board6.onclick = function bottomLeft () {

        //if array at this spot == 0
        if (gameBoard[6] == 0 && gameOver == false) {
            console.log('bottomLeft clicked');
            document.querySelector('#board6').innerHTML = 'X';
            gameBoard[6] = 1;
            //console.log(gameBoard);
            checkWinner();
            computerTurn();
            checkWinner();
    
        }

        //else send message saying you cant go there
        else {
            console.log('you cant go here')
        }
    }

    board7.onclick = function bottomMiddle () {

        //if array at this spot == 0
        if (gameBoard[7] == 0 && gameOver == false) {
            console.log('bottomMiddle clicked');
            document.querySelector('#board7').innerHTML = 'X';
            gameBoard[7] = 1;
            //console.log(gameBoard);
            checkWinner();
            computerTurn();
            checkWinner();
    
        }

        //else send message saying you cant go there
        else {
            console.log('you cant go here')
        }
    }

    board8.onclick = function bottomRight () {

        //if array at this spot == 0
        if (gameBoard[8] == 0 && gameOver == false) {
            console.log('bottomRight clicked');
            document.querySelector('#board8').innerHTML = 'X';
            gameBoard[8] = 1;
            //console.log(gameBoard);
            checkWinner();
            computerTurn();
            checkWinner();
    
        }

        //else send message saying you cant go there
        else {
            console.log('you cant go here')
        }
    }

    
    

})();


/*
let gameBoardController = {
        

    init: function () {
        console.log('gbc initialted');
    }
};

gameBoardController.init();

*/