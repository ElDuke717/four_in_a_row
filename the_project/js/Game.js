class Game {
    constructor() {
        this.board = new Board;
        this.players = this.createPlayers();
        this.ready = false;
    }

/**
 * Creates two player objects
 * @return {array}  An array of two Player objects.
 */
    createPlayers() {
        const players = [new Player('Player 1',  1, '#e15258', true),
                        new Player('Player 2',  2, '#e59a13',)]
        return players;
    }

    /**Makes the game ready to play/ initializes game */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = 'true';
    }

    get activePlayer() {
        return this.players.find(player => player.active);
    }

    /**
 * Branches code, depending on what key player presses
 * @param   {Object}    e - Keydown event object
 */

    handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                //move the token left
               this.activePlayer.activeToken.moveleft();
               
            }
            else if (e.key === "ArrowRight") {
                //move the token right
               this.activePlayer.activetoken.moveRight(this.board.columns);
                
            }
            else if (e.key === "ArrowDown") {
                //move the token down
                
            }
            else if (e.key === "ArrowUp") {
                
            }
        }
    }
}

