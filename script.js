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
        //computer picks random spot
        let randomBoard = Math.floor(Math.random()*9);

        //if the randomly selected spot is empty and if the game is not over
        //we change that spot int he gameBoard to 2 and change the DOM to an O at that spot
        if (gameBoard[randomBoard] == 0 && gameOver == false) {
            gameBoard[randomBoard] = 2;
            document.querySelector('#board'+randomBoard).innerHTML = 'O'; 
        }
        //if the spot is occupied, run the function again.
        //this picks a new random number for the computer to try and play on
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

        //since empty spot = 0, X = 1, and O = 2,
        //the sum of the whole array can only be one of 5 specific numbers
        //if someone wins the game. and based on those numbers, we know
        //if player 1 (X) won, or player 2 (O)
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

    //function to change the gameBoard and change the DOM according to player moves
    //also checks for a winner after every player move and computer move
    function boardClick(boardNumber) {
        return function() {

        //if array at this spot == 0, player can move here
        //also if the game is not over
        if (gameBoard[boardNumber] == 0 && gameOver == false) {
            document.querySelector('#'+this.id).innerHTML = 'X';
            gameBoard[boardNumber] = 1;
            checkWinner();
            computerTurn();
            checkWinner();
        }

        //else send message saying you cant go there because the spot is occupied
        else {
            console.log('you cant go here')
        }
    }
    }

    //adding the function to all 9 buttons
    board0.onclick = boardClick(0);
    board1.onclick = boardClick(1);
    board2.onclick = boardClick(2);
    board3.onclick = boardClick(3);
    board4.onclick = boardClick(4);
    board5.onclick = boardClick(5);
    board6.onclick = boardClick(6);
    board7.onclick = boardClick(7);
    board8.onclick = boardClick(8);




    /*
        Im leaving all the below in to remind myself my initial ideas
        and how i ended up fixing it and making it more concise.
        The goal of this project is to use modular pieces.
        I was fixing 9 separate functions every time something changed
        in one of the buttons and that was not the goal.
        Now, if anything needs to change about the buttons, I only
        need to change 1 function.
    
    */


/*
    //when button w specific ID is clicked, corresponding function takes place
    //changes button inner html, changes value of game board array to 1
    board0.onclick = function topLeft () {

        //if array at this spot == 0
        if (gameBoard[0] == 0 && gameOver == false) {
            console.log(this.id+' topLeft clicked');
            console.log(this.id);
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
*/
    
    

})();