/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Andrew
 * Created on: Oct 2025
 * This program shows a while loop
*/

let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// p seress "A" button
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    while (loopCounter <= 5) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// press "B" button
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    loopCounter = 5
    sprite = game.createSprite(5, 5)
    while (loopCounter >= -1) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
