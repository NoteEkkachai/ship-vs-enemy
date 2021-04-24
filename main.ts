input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    if (Shoot.isTouching(Mnmmy)) {
        game.addScore(1)
    }
    if (Shoot.get(LedSpriteProperty.Y) <= 0) {
        Shoot.delete()
    }
    Shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Shootmnmmy: game.LedSprite = null
let Shoot: game.LedSprite = null
let Mnmmy: game.LedSprite = null
let Player: game.LedSprite = null
game.setScore(0)
game.setLife(5)
Player = game.createSprite(2, 4)
Mnmmy = game.createSprite(0, 0)
basic.forever(function () {
    Mnmmy.move(1)
    basic.pause(100)
    Mnmmy.ifOnEdgeBounce()
    Shootmnmmy = game.createSprite(Mnmmy.get(LedSpriteProperty.X), Mnmmy.get(LedSpriteProperty.Y))
    Shootmnmmy.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shootmnmmy.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if (Shootmnmmy.isTouching(Player)) {
            game.removeLife(1)
        }
        if (Shootmnmmy.get(LedSpriteProperty.Y) >= 4) {
            Shootmnmmy.delete()
        }
    }
})
