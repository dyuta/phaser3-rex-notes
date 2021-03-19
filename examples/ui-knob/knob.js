import UIPlugin from '../../templates/ui/ui-plugin.js';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

const GetValue = Phaser.Utils.Objects.GetValue;

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })

    }

    preload() {
        this.load.image('volume', './assets/images/volume.png');
    }

    create() {
        var print = this.add.text(0, 0, '');

        var knob = this.rexUI.add.knob({
            x: 400, y: 300,
            width: 150, height: 150,

            trackColor: COLOR_DARK,
            barColor: COLOR_LIGHT,
            centerColor: COLOR_PRIMARY,

            text: this.rexUI.add.label({
                text: this.add.text(0, 0, '', {
                    fontSize: '30px'
                }),
                icon: this.add.image(0, 0, 'volume'),
                space: {
                    icon: 10
                }
            }).setDepth(1),
            textFormatCallback: function (value) {
                return Math.floor(value * 100).toString();
            },

            value: 0.1,
            easeValue: { duration: 250 },
            valuechangeCallback: function (value) {
                print.text = value;
            }
        })
            .layout();
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
        scene: [{
            key: 'rexUI',
            plugin: UIPlugin,
            mapping: 'rexUI'
        }]
    }
};

var game = new Phaser.Game(config);