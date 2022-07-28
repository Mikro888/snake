let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x: 0, y: 0}
let currentDirection = {}

    window.addEventListener('keydown', e => {
        switch (e.key) {
            case 'ArrowUp':
                if (lastInputDirection.y !== 0) break
                inputDirection = {x: 0, y: -1}
                currentDirection = inputDirection
                break
            case 'ArrowDown':
                if (lastInputDirection.y !== 0) break
                inputDirection = {x: 0, y: +1}
                currentDirection = inputDirection
                break
            case 'ArrowLeft':
                if (lastInputDirection.x !== 0) break
                inputDirection = {x: -1, y: 0}
                currentDirection = inputDirection
                break
            case 'ArrowRight':
                if (lastInputDirection.x !== 0) break
                inputDirection = {x: +1, y: 0}
                currentDirection = inputDirection
                break
        }
    })

export const getInputDirection = () => {
    lastInputDirection = inputDirection
    return inputDirection
}


export const pauseGame = () => {
    if (inputDirection.x !== 0 || inputDirection.y !== 0)
        inputDirection = {x: 0, y: 0}
    else {
        inputDirection=currentDirection}
}

