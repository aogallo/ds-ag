import { __assign } from "tslib";
import React, { createRef, useEffect, useRef, useState, } from 'react';
import Text from 'atoms/Text/Text';
var Select = function (_a) {
    var _b;
    var _c = _a.options, options = _c === void 0 ? [] : _c, _d = _a.label, label = _d === void 0 ? 'Please select the option...' : _d, handler = _a.onOptionSelected, renderOption = _a.renderOption;
    var _e = useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var _f = useState(null), selectedIndex = _f[0], setSelectedIndex = _f[1];
    var labelRef = useRef(null);
    var _g = useState(0), overlayTop = _g[0], setOverlayTop = _g[1];
    var _h = useState([]), optionRefs = _h[0], setOptionsRefs = _h[1];
    useEffect(function () {
        var _a;
        setOverlayTop((((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) - 13);
    }, [(_b = labelRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight]);
    useEffect(function () {
        setOptionsRefs(options.map(function (_) { return createRef(); }));
    }, [options.length]);
    var onClickOption = function (option, optionIndex) {
        setIsOpen(!isOpen);
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    var KEY_CODES = {
        ENTER: 13,
        SPACE: 32,
        DOWN_ARROW: 40,
    };
    var onButtonKeyDown = function (event) {
        event.preventDefault();
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
            setIsOpen(true);
        }
    };
    return (React.createElement("div", { className: 'dse-select' },
        React.createElement("button", { onKeyDown: onButtonKeyDown, "aria-controls": 'dse-select-list', "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, ref: labelRef, className: 'dse-select__label', onClick: function () { return setIsOpen(!isOpen); } },
            React.createElement(Text, null, selectedIndex === null ? label : options[selectedIndex].label),
            React.createElement("svg", { className: "dse-select__caret ".concat(isOpen ? 'dse-select__caret--open' : 'dse-select__caret-closed'), width: '1rem', height: '1rem', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor' },
                React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.5 8.25l-7.5 7.5-7.5-7.5' }))),
        isOpen ? (React.createElement("ul", { role: 'menu', id: 'dse-select-list', style: { top: overlayTop }, className: 'dse-select__overlay' }, options.map(function (option, optionIndex) {
            var isSelected = selectedIndex === optionIndex;
            var ref = optionRefs[optionIndex];
            var renderOptionsProps = {
                option: option,
                isSelected: isSelected,
                getOptionRecommendedProps: function (overrideProps) {
                    if (overrideProps === void 0) { overrideProps = {}; }
                    return __assign({ ref: ref, role: 'menuitemradio', 'aria-label': option.label, 'aria-checked': isSelected ? true : undefined, className: "dse-select__option ".concat(isSelected ? 'dse-select__option--selected' : ''), key: option.value, onClick: function () { return onClickOption(option, optionIndex); } }, overrideProps);
                },
            };
            if (renderOption) {
                return renderOption(renderOptionsProps);
            }
            return (React.createElement("li", { ref: ref, className: "dse-select__option ".concat(isSelected ? 'dse-select__option--selected' : ''), key: option.value, onClick: function () { return onClickOption(option, optionIndex); } },
                React.createElement(Text, null,
                    " ",
                    option.label),
                isSelected ? (React.createElement("svg", { width: '1rem', height: '1rem', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'w-6 h-6' },
                    React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M4.5 12.75l6 6 9-13.5' }))) : null));
        }))) : null));
};
export default Select;
//# sourceMappingURL=Select.js.map