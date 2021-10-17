import 'phaser';
import FullWindowRectanglePlugin from '../../plugins/fullwindowrectangle-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
        this.txt;
    }

    preload() {
        this.load.image('classroom', 'assets/images/backgrounds/classroom.png');
    }

    create() {
        this.add.image(400, 300, 'classroom');
        var rect = this.add.rexFullWindowRectangle(0xFF0000, 0.3);

        var tween = this.tweens.add({
            duration: 2000,
            targets: this.cameras.main,
            scrollX: -300,
            zoom: 0.5,

            repeat: -1,
            yoyo: true
        });
    }

    update() {
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: 0x888888,
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
        global: [{
            key: 'rexFullWindowRectangle',
            plugin: FullWindowRectanglePlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);