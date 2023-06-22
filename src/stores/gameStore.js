import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
    state: () => {
        return {
            values: [
                { x: 0, y: 0, player: 0, content: '' },
                { x: 0, y: 1, player: 0, content: '' },
                { x: 0, y: 2, player: 0, content: '' },
                { x: 1, y: 0, player: 0, content: '' },
                { x: 1, y: 1, player: 0, content: '' },
                { x: 1, y: 2, player: 0, content: '' },
                { x: 2, y: 0, player: 0, content: '' },
                { x: 2, y: 1, player: 0, content: '' },
                { x: 2, y: 2, player: 0, content: '' },
            ],
            isPlayerOneActive: true,
            playerOne: {
                name: 'Player 1',
                score: 0
            },
            playerTwo: {
                name: 'Player 2',
                score: 0
            },
            message: ''
        }
    },
    getters: {
        getContent: (state) => {
            return (value) => state.values.filter(v => v.x == value.x && v.y == value.y)[0].content
        }
    },
    actions: {
        resetBoard() {
            this.values.forEach(item => {
                item.content = ''
                item.player = 0
            });
            this.isPlayerOneActive = true;
            setTimeout(() => {
                this.message = '';
            }, 1500);
        },
        resetGame() {
            this.resetBoard();
            this.playerOne.score = 0;
            this.playerTwo.score = 0;
        },
        checkGame() {
            const playerOneMoves = this.values.filter(item => item.player == 1);
            const playerTwoMoves = this.values.filter(item => item.player == 2);

            const isVerticalOrHorizontalMatch = (items) => {
                if (items.length < 3)
                    return;

                const checkOnDirection = (value) => {
                    let counts = [];
                    let dictionary = {};

                    value.forEach(i => {
                        dictionary[i] = (dictionary[i] || 0) + 1
                    })
                    for (var i in dictionary) { counts.push(dictionary[i]) }
                    return counts.indexOf(3) > -1
                }

                return checkOnDirection(items.map(i => i.x))
                    || checkOnDirection(items.map(i => i.y));
            };

            const isDiagonalMatch = (items) => {
                if (items.length < 3)
                    return;

                return items.filter(i => i.x == i.y).length == 3
                    || items.filter(i => 2 - i.x == i.y).length == 3;
            }

            if (playerOneMoves.length >= 3 || playerTwoMoves.length >= 3) {
                if (isVerticalOrHorizontalMatch(playerOneMoves) || isDiagonalMatch(playerOneMoves)) {
                    this.playerOne.score++;
                    this.message = `${this.playerOne.name} won`
                    this.resetBoard();
                } else if (isVerticalOrHorizontalMatch(playerTwoMoves) || isDiagonalMatch(playerTwoMoves)) {
                    this.playerTwo.score++;
                    this.message = `${this.playerTwo.name} won`
                    this.resetBoard();
                } else if (playerOneMoves.length + playerTwoMoves.length === 9) {
                    this.message = `Draw`
                    this.resetBoard();
                }
            }
        },
        selectCell(value) {
            const index = this.values.findIndex(v => v.x == value.x && v.y == value.y);
            const item = this.values[index];
            item.player = this.isPlayerOneActive ? 1 : 2;
            item.content = this.isPlayerOneActive ? 'X' : 'O';
            this.values.splice(index, 1, item);

            this.isPlayerOneActive = !this.isPlayerOneActive;
            this.checkGame();
        }
    }
})
