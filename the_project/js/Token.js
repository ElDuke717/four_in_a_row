class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
    drawHTMLToken() {
        const token = document.createElement('div');
        const underLay = document.getElementById('game-board-underlay');
        underLay.appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }
    get htmlToken() {
        return token;
    }
}