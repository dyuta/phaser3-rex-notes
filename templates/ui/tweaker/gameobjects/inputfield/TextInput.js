import InputFiledBase from './InputFieldBase.js';
import CreateTextInput from '../utils/CreateTextInput.js';

class TextInput extends InputFiledBase {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        super(scene);
        this.type = 'rexTweaker.TextInput';

        var inputTextConfig = config.inputText;
        var inputText = CreateTextInput(scene, inputTextConfig);

        this.add(
            inputText,
            { proportion: 1, expand: true }
        )

        this.addChildrenMap('inputText', inputText);

        inputText.on('close', function () {
            this.setValue(inputText.value);
        }, this);
    }

    get value() {
        return this._value;
    }

    set value(value) {
        if (this._value === value) {
            return;
        }

        var text = (this.textFormatCallback) ? this.textFormatCallback(value) : value;
        this.childrenMap.inputText.setText(text);
        super.value = value;
    }

    setInputTextReadOnly(enable) {
        if (enable === undefined) {
            enable = true;
        }
        this.childrenMap.inputText.setReadOnly(enable);
        return this;
    }
}

export default TextInput;