let heroe = game.createSprite(0, 2)
heroe.set(LedSpriteProperty.Brightness, 120)
let villano = game.createSprite(randint(1, 4), randint(0, 4))
let villano_pt2 = game.createSprite(randint(1, 4), randint(0, 4))
let villano_pt3 = game.createSprite(randint(1, 4), randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        heroe.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        heroe.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        heroe.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        heroe.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (heroe.isTouching(villano)) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
        villano.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
    }
    if (heroe.isTouching(villano_pt2)) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
        villano_pt2.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
    }
    if (heroe.isTouching(villano_pt3)) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
        villano_pt3.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
    }
})
loops.everyInterval(3000, function () {
    game.addScore(1)
})
