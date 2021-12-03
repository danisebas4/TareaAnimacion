
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('fondo', 'assets/images/fondo.png');
        game.load.spritesheet('caballo', 'assets/images/caballo.png', 180, 141, 17);
    },
    create: function() {
        game.add.sprite(0, 0, 'fondo');
        this.samurai = game.add.sprite(0,800, 'caballo');
        this.samurai.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7,true);
        this.samurai.animations.play("walk");
    },
    update: function() {
        console.log("update");
        this.samurai.x += 2;
        
    }
}

var game = new Phaser.Game(1200, 960, Phaser.CANVAS);
var sonido;
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");