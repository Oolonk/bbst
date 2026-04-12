class Deck {
    constructor(params) {
        if (!params)
            params = {};
        this.decklist = params.decklist || new Array(3);
    }
}