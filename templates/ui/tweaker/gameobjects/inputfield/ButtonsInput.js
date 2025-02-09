import InputFiledBase from './InputFieldBase.js';
import CreateButtons from '../utils/CreateButtons.js';
import CreateLabel from '../utils/CreateLabel.js';
import SetLabelData from '../utils/SetLabelData.js';
import { GetOptionText, GetOptionValue } from '../../utils/OptionsMethods.js';
import SetButtonsActiveStateByText from '../utils/SetButtonsActiveState.js';

class ButtonsInput extends InputFiledBase {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        super(scene);
        this.type = 'rexTweaker.ButtonsInput';

        var list = CreateButtons(scene);
        list.labelConfig = config.button || {};

        this.add(
            list,
            { proportion: 1, expand: true }
        );

        this.addChildrenMap('list', list);

        list.on('button.click', function (button, index, pointer, event) {
            var value = GetOptionValue(list.options, button.text);
            this.setValue(value);
        }, this);

    }

    get value() {
        return this._value;
    }

    set value(value) {
        if (this._value === value) {
            return;
        }

        var list = this.childrenMap.list;
        var text = GetOptionText(list.options, value);
        SetButtonsActiveStateByText(list.childrenMap.buttons, text);
        super.value = value;
    }

    setOptions(options) {
        var list = this.childrenMap.list;
        list.options = options;

        var scene = this.scene;
        var labelConfig = list.labelConfig;
        list.clearButtons(true);
        for (var i = 0, cnt = options.length; i < cnt; i++) {
            var button = CreateLabel(scene, labelConfig)
                .setActiveState(false);

            var option = options[i];
            SetLabelData(button, { text: option.text });
            list.addButton(button);
        }

        return this;
    }
}

export default ButtonsInput;