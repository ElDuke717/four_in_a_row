class Player {
    //note that active = false sets a default value for active.
    //tokens is not passed in as a property of the constructor - it will be used in a method later.  
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * Creates token objects for the player
     * @param {integer} num - Number of token objects to be created
     * @return {array}  tokens - an array of new token objects. 
     */

    createTokens(num) {
        const tokens = [];

        for (let i=0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }

        return tokens;
    }

    /**
     * Gets all tokens that haven't been dropped.
     * @return {array} Array of unused tokens.
     */

    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
        
    }

    /**
     * Gets the active token by returning the first token in the unusedToken array of unused
     * tokens that was just created.
     * @return {Object} First token object in the array of unuses tokens. 
     */

    get activeToken() {
        return this.unusedTokens[0];
    }
}