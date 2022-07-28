import {getInputDirection} from "./input.js";

let myStorage = window.sessionStorage

export let SNAKE_SPEED = +myStorage.speed||5

export const increaseSpeed = () => {
    SNAKE_SPEED += 1
}
export const setIncreaseSpeed = () =>{
    increaseSpeed()
    myStorage.setItem('speed', SNAKE_SPEED)

}
export const decreaseSpeed = () => {
    SNAKE_SPEED -= 1
    myStorage.setItem('speed', SNAKE_SPEED)
}

export const snakeBody = [
    {x: 11, y: 11},
]
let newSegments = 0

let scoreDisplay = document.getElementById('score')
scoreDisplay.innerHTML = SNAKE_SPEED

export const update = () => {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}
export const draw = (gameBoard) => {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
        scoreDisplay.innerHTML = SNAKE_SPEED
    })
}
export const expandSnake = (amount) => {
    newSegments += amount
}
export const onSnake = (position, {ignoreHead = false} = {}) => {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}
const equalPositions = (pos1, pos2) => pos1.x === pos2.x && pos1.y === pos2.y

const addSegments = () => {
    for (let i = 0; i < newSegments; i++) {
        snakeBody[snakeBody.length] = {...snakeBody[snakeBody.length - 1]}
    }
    newSegments = 0
}
export const getSnakeHead = () => {
    return snakeBody[0]
}
export const snakeIntersection = () => {
    return onSnake(snakeBody[0], {ignoreHead: true})
}
let plusButton = document.getElementById('plusControl')
plusButton.addEventListener('click', () => setIncreaseSpeed())

let minusButton = document.getElementById('minusControl')
minusButton.addEventListener('click', () => decreaseSpeed())



