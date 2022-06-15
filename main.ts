controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -222222
    }
})
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffff
    ffffffff5ffffffffffffff99999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff222fffffffffffffffffffffffff5fffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff2ffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffff
    fffffffffffffffffffffffffff5ffff5fffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffff555fffffffffff5fffffffffffffff999ffffffffffffffffffffffffffffffffffffffffffffff99ff2fffffff2fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffffffffff5ffffffffff99999fffffffffffffffffffffffffffffffffffffffffffffffff2222ff9fff22ffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999ffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffff5ffffff22fffffffff
    ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffff
    fff2fffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffff999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffff
    ff2fffffffffffffffffffffffffffffffffffffffff9fffffffffff99999999ffffffffffff22222222222222222222222222222ffffffffffffff9999999ffffffffffffffffff2fffffffffffffff
    f2fffffffffffffffffffffffffffffffffffffffffff99fffff9999fffffffffff222222222fffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffff
    f2ffffffffffffff2fffffffffffffffff9555555555599999995ffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f2fffffffffffff2ffffffffffffffffff99999999999fffffff999fff22222fffffffffffffffffffffffffffffffff99999999999fff22222fffffffffffffffffffff2fffffffffffffffffffffff
    fffffffffffffff2ffffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffff9999f22fffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffff
    fffffffffff9ffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffff999fff22fffffffffffffffffffffffffffffffffffffff2fff5fffffffffffffffffff
    ffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffff5fffffffffffffffffffffffff2ffffffffffffffffffffffff
    fffffffff9fffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffff
    2fffffff9ffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffff
    2fffffff9fffffffff5fffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffff
    fffffff9ffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffff
    ffffff9fffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff9ffffffffffffffffffffffffffffffffffffff2fffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff9ffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff5ffffffffffff2fffff55ffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffff5ffffff
    ffffffffffffffffffffffffffffff5fffffffffffff2ff2222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffff5ffffff
    ffffffffffffffffffffffffffffff5ffffffffffff2222ffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffff5ffffff
    fffffffffffffffffffffffffffff5fffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffff2ffffffffffffffffffffff5ffffff
    fffffffffffffffffffffffffff55ffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffff2fffffffffffffffffffffff5ffffff
    ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fff2fffffffffffffffffffffffff5fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffff5fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffff5ffff9fffffffffffff5ffffffffffffff
    ffffffffffffffff5ffffffff5fffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffff25ff9fffffffffffffffffffffffffffff
    ffffffffff5fffff5ffffffffffffffffffffffff52222ffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffff2222ff59ffffffffffffffffffffffffffffff
    ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff22fffff9552ffffffffffffffffffffffffffff
    fffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff22f2fffff9225ffffffffffffffffffffffffffff
    fffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffff2fff92fffffffffffffffffffffffffffffff
    fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ff9ffffffffffffffffffffffffffffffff
    fffffffffffffffff5fffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffff29fffffffffffffffffffffffffffffffff
    ffffffffffffffffff5ffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffff2f9fffffffffffffffffffffffffffffffff
    ffffffffffffffffff5ffffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffff2f9ffffffffffffffffffffffffffffffffff
    ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffff2ff9fffffffffffffff5fffffff9ffffffffff
    ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffff55ffffffffffffffffff5fffffffffffffffffffffff9ffffffffffffffffffff9ffffffffffffffff5fffffff9ffffffffff
    ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffff5fffffff5559555555ffffffffffffff9ffffffffffffffff5fffffff9ffffffffff
    f5ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffff5555555fff9fffffffffffffffffff9fffffffffffffffffffffffffff5ffffffff
    ffffffffffffffffff55fffffffffffffffffffff9fffffffffffff99ffffffff55fffffffffffffffffffffffffffffffffff9ffffffffffffffffffff9fffffffffffffffffffffffffff5ffffffff
    ffffffffffffffffffff5fffffffffffffffffff9ffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff
    fffffffffffffffffffff55ffff2ffffffffff99fffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff
    fffffffffffffffffffffff555255ffffffff9fffffffffffffffffffffffffffffffff55fffffffffffffffffffffffff99999ffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff
    ffffffffffffffffffffffffff2ff5555555955555555555555555555ffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff
    fffffffffffffffffffffffff2ffffffff99ffffffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5ffffffff
    ffffffffffffff9ffffffffff2fffffff9ffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffff5ffffffff
    ffffffffffffff9fffffffff2fffffff9ffffffffffffffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffff
    ffffffffffffff9fffffffff2ffffff9fffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffff
    fffffffffffffffffffffff2fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffff9ffffffffffff2fffffffffffffffffffff9fffffff
    fffffffffffffffffffffff2ffffff9fffffffffffffffffffffffffff5ffffffffffffffffffffffffffff55ffffffffffffff5fffffffffff99fffffffffffff2fffffffffffffffffffff9fffffff
    ffffffffffffffffffffff2ffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffff2ffffffffffffffffffffff99ffffff
    ffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9ffffffffffffffff2ffffffffffffffffffffffffffffff
    ffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffff9ffffffffffffffffffffffffffffffff2ffffffffffffffffff5ffffffffffff
    ffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffff9fffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffff
    fffffff55fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffff
    fffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffff9fffffffffffffffffffffffffff5ff2fffffffffffffffffffffffffffffffff
    fffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff2f2ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffff
    ffffffffffff5ffffffff2fffffff5fffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffff9fffffffffff5fffffffffffffff2ffffffffffffffffffffffffff5ffffffff
    fffffffffffff9fffffff2ffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffff9fff5fffffffffffffffffffff22ffffffffffffffffffffffffffff5fffffff
    ffffffffffff9fffffff2fffffffffffffffffffffffffffffffffffff22fffffffffffffffffff5fffffffffffffffff9ff5ffffffffffffffffffff2ffffffffffffffffffffffffffffff5fffffff
    ffffffffffff9fffffff2fffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff2fffffffff5fffffffffffffffffffff5fffffff
    fffffffffff9ffffffff2ffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
    fffffffffff9fffffff2ffffffffffffffffffffffffffffffffff2fff2fffffffffffffffffffffffffffffffffffffffff5fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff
    ffffffffff9ffffffff2ffffffffffffffffffffffffffffffff22ffff2ffffffffff5f9fffffffffffffff5fffffffffff5fffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffff
    ffffffffff9fffffff2ffffffffffffffffffffffffffffffff2fffffffffffffffffff9fffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff9ffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffff9ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffff2222229ffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff
    5fffffffffffffffffffffffff9fffffffffffffffffffffffffffff2fffffffffffffff92222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff
    fffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff
    fffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff
    ffffffffff5ffffffffffffff9fffffffffffffffffffffffff5fffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffff
    fffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffff
    fffffffffffffffffffffffff9fffffffffffffffffffffffffffffff2fffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff5ff2fffffffffffffffffff
    fffffffffffffffffffffffff9fffffffffffffffffffffffffffffff2ffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffff2ffffffffffffffffffff
    fffffffffffffffffffffffff9fffffffffffffffffffffffffffffff2ffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffff2fffffffffffffffffffff
    fffffffffffffffffffffffff92ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999fffffff5ffffffffffffffff9ffffffffffffff
    fffffffffffffffffffffffff992fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff99999999999fffffffffffffffffff2fffffff9fffffffffffffff
    fffffffffffffffffffffffff9f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffff99ffffffffffffffff
    fffffffffffffffffffffffff9ff2fffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffff99ffffffffffffffffff
    ffffffffffffffff2ffffffff9ff2fff222222fffffffffffffff2ffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffff55fffffffffffffffff9999ffffffffffffffffffff
    fffffffffffffff2ffffffff9ffff222fffffffffffffffffffff22fffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffff2ff999999ffffffffffffffffffffffff
    ffffffffffff5fffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffff99999ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff9ffffffffffffffff5fffffffffffffffffff22fffffffff222ffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffff
    ffffff5fffffffffffffffff9ffffffffffffffffffffffffffffffffffffff2222222225fffff9ffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff9fffffff5fffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffff2fffff5fffffffff
    fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffff2fffffffffffffff
    fffffffffffffffffffffff9fffffff5ffffffffffffffffffffffffff2ffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffff
    fffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff
    ffffffffffffffffffffffff9ffffff999fffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffff9ff55ffffffffffffffffffffffffffffffffffffff2ffffffffffffff
    fffffffffffffffffffffffff9ff999fffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff99f55ffffffffffffffffffffffffffffffffffffffff2ffffffffffffff
    ffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f9fffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e . . . 4 . . . . . . 
    . . . . . e e e 4 4 . . . . . . 
    . . . . . e 5 e 5 4 . . . . . . 
    . . . . . e e e 4 4 . . . . . . 
    . . . . . e e e 4 4 . . . . . . 
    . e e . e e e e 4 4 . . . . . . 
    . e . . e e e e 4 4 . . . . . . 
    . e e e e e e 4 4 4 . . . . . . 
    . . . . . e . . 4 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 300, 0)
mySprite.ay = 100
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
