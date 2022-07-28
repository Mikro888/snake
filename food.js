import {onSnake, expandSnake, increaseSpeed} from "./snake.js";
import {randomGreedPosition} from "./grid.js"



const getRandomFoodPosition = () => {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGreedPosition()
    }
    return newFoodPosition
}
let food = getRandomFoodPosition()

const EXPANSION_RATE = 2
export const update = () => {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        increaseSpeed()
        food = getRandomFoodPosition()
    }
}
export const draw = (gameBoard) => {

    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

