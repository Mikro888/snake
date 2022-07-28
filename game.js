import {
    update as updateSnake,
    draw as drawSnake,
    SNAKE_SPEED, getSnakeHead, snakeIntersection, snakeBody
} from "./snake.js";
import {outsideGrid} from "./grid.js";
import {update as updateFood, draw as drawFood} from "./food.js"
import {pauseGame} from "./input.js";

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
let scoreStorage = window.localStorage;

const main = (currentTime) => {
    if (gameOver) {
        // if (confirm('Press ok to restart.')) {
            window.location = '';
            if(snakeBody.length>+scoreStorage.maxSpeed){
                // scoreStorage.setItem('maxSpeed',SNAKE_SPEED.toString())
                scoreStorage.setItem('maxSpeed',snakeBody.length.toString())
            // }
        }
        return;
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime
    update()
    draw()
}
window.requestAnimationFrame(main)

const update = () => {
    updateSnake()
    updateFood()
    checkDeath()
}
const draw = () => {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
const checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
let pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', () => pauseGame())

let maxScoreDisplay = document.getElementById('maxScore')
maxScoreDisplay.innerHTML = scoreStorage.maxSpeed || 0

let resetButton = document.getElementById('reset')
resetButton.addEventListener('click',()=>{scoreStorage.setItem('maxSpeed','0');maxScoreDisplay.innerHTML='0'})




