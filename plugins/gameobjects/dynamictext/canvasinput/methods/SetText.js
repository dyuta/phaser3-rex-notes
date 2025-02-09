import { diffChars } from '../../../../utils/jsdiff/index.js'

var SetText = function (textObject, newText) {
    var text = textObject.text;
    if (newText === text) {
        return;
    }

    // textObject.setText(newText);

    if (newText === '') {
        textObject.popChild(textObject.lastInsertCursor);
        textObject.removeChildren();
        textObject.addChild(textObject.lastInsertCursor, 0);
    } else {
        var results = diffChars(text, newText);
        var charIndex = 0;
        for (var i = 0, cnt = results.length; i < cnt; i++) {
            var result = results[i];
            if (result.removed) {
                // Remove character at charIndex
                textObject.removeText(charIndex, result.count);
            } else if (result.added) {
                textObject.insertText(charIndex, result.value);
                charIndex += result.count;
            } else {
                charIndex += result.count;
            }
        }
    }

    textObject.runWordWrap();
}

export default SetText;