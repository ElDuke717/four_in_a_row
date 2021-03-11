class Board {
    constructor() {
       this.rows = 6;
       this.columns = 7;
       this.spaces = this.createSpaces(); 
    }
/**
 * This method generates a 2D array of spaces.
 * @return {array} An array of space objects
 */

    createSpaces() {
        const spaces = [];

        for (let x = 0; x < this.columns; x++) {
            const column = [];
        

        for (let y = 0; y < this.rows; y++) {
            const space = new Space(x, y);
            column.push(space);
        }
        spaces.push(column);
        }

        return spaces;
    }

    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
            space.drawSVGSpace();
            }
        }
    }
}

//No arguments are passed to the constructor method because there is only one board object and we're
//statically setting the number of rows and columns - thus no argument are passed because they won't change.