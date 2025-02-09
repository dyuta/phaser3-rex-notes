import BaseShapes from '../shapes/BaseShapes';

export default Checkbox;

declare namespace Checkbox {
    interface IConfig {
        x: number, y: number,
        width: number, height: number,

        color?: number, boxFillAlpha?: number,
        uncheckedColor?: number, uncheckedBoxFillAlpha?: number,

        boxLineWidth?: number, boxStrokeColor?: number, boxStrokeAlpha?: number,
        uncheckedBoxStrokeColor?: number, uncheckedBoxStrokeAlpha?: number,

        checkerColor?: number, checkerAlpha?: number,

        circleBox?: boolean,

        animationDuration?: number,

        checked?: boolean,
    }
}

declare class Checkbox extends BaseShapes {
    constructor(
        scene: Phaser.Scene,
        x: number, y: number,
        width: number, height: number,
        color?: number,
        config?: Checkbox.IConfig
    );

    constructor(
        scene: Phaser.Scene,
        x?: number, y?: number,
        width?: number, height?: number,
        config?: Checkbox.IConfig
    );

    constructor(
        scene: Phaser.Scene,
        config?: Checkbox.IConfig
    );

    setChecked(checked?: boolean): this;
    toggleChecked(): this;
    checked: boolean;
    setValue(value: boolean): this;
    value: boolean;

    setBoxShape(isCircleShape?: boolean): this;

    setBoxFillStyle(color: number, alpha?: number): this;
    boxFillColor: number;
    boxFillAlpha: number;
    setUncheckedBoxFillStyle(color: number, alpha?: number): this;
    uncheckedBoxFillColor: number;
    uncheckedBoxFillAlpha: number;

    setBoxStrokeStyle(lineWidth: number, color: number, alpha?: number): this;
    boxLineWidth: number;
    boxStrokeColor: number;
    boxStrokeAlpha: number;

    setUncheckedBoxStrokeStyle(lineWidth: number, color: number, alpha?: number): this;
    uncheckedBoxLineWidth: number;
    uncheckedBoxStrokeColor: number;
    uncheckedBoxStrokeAlpha: number;

    setCheckerStyle(color: number, alpha?: number): this;
    checkerColor: number;
    checkAlpha: number;

    setCheckerAnimDuration(duration: number): this;
    checkerAnimDuration: number;
}