import { v1 as uuidv1 } from "uuid"

export var currentGames = {};

export function getGame(id) {
    return currentGames[id];
}

export function joinGame(id) {
    const game = getGame(id);
    if (!game) return false;
    const playerId = uuidv1();
    game.clients.push(playerId);
    return playerId;
}

export function createGame() {
    const newGameId = uuidv1();
    currentGames[newGameId] = newGame();
    return newGameId;
}

function newGame() {
    return {
        getAllNations: () => {
            return nations;
        },
        clients: []
    }
}