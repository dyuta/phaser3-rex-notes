const RotateAround = Phaser.Math.RotateAround;

var BobPositionToCanvasPosition = function (bobX, bobY, bob, out) {
    if (out === undefined) {
        out = {};
    } else if (out === true) {
        if (globPoint === undefined) {
            globPoint = {};
        }
        out = globPoint;
    }

    out.x = bobX;
    out.y = bobY;
    RotateAround(out, 0, 0, bob.rotation);
    out.x = (out.x * bob.scaleX) + bob.drawX;
    out.y = (out.y * bob.scaleY) + bob.drawY;

    return out;
}

var globPoint;

export default BobPositionToCanvasPosition