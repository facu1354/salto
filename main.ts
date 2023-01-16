input.onButtonPressed(Button.A, function () {
    P_abajo.change(LedSpriteProperty.Y, -1)
    Parriba.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    P_abajo.change(LedSpriteProperty.Y, 1)
    Parriba.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Parriba.set(LedSpriteProperty.X, 0)
    Parriba.set(LedSpriteProperty.Y, 4)
    basic.pause(1000)
    Parriba.set(LedSpriteProperty.Y, 3)
    Parriba.set(LedSpriteProperty.X, 1)
})
let Parriba: game.LedSprite = null
let P_abajo: game.LedSprite = null
P_abajo = game.createSprite(1, 4)
Parriba = game.createSprite(1, 3)
let obstaculo = game.createSprite(4, 4)
basic.forever(function () {
    if (obstaculo.isTouching(Parriba)) {
        game.gameOver()
    }
})
basic.forever(function () {
    obstaculo.change(LedSpriteProperty.X, -1)
    basic.pause(600)
    if (obstaculo.get(LedSpriteProperty.X) == 0) {
        obstaculo.set(LedSpriteProperty.X, 4)
        obstaculo.set(LedSpriteProperty.Y, randint(3, 4))
        game.addScore(1)
    }
})
basic.forever(function () {
    if (obstaculo.isTouching(P_abajo)) {
        game.gameOver()
    }
})
