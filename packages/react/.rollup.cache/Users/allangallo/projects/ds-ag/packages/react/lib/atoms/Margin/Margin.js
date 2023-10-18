import React from 'react';
import { Spacing } from '@ds.ag/foundation';
var Margin = function (_a) {
    var children = _a.children, _b = _a.space, space = _b === void 0 ? Spacing.md : _b, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom;
    var side = left
        ? "dse-margin-left".concat(space ? "-".concat(space) : '')
        : right
            ? "dse-margin-right".concat(space ? "-".concat(space) : '')
            : top
                ? "dse-margin-top".concat(space ? "-".concat(space) : '')
                : bottom
                    ? "dse-margin-bottom".concat(space ? "-".concat(space) : '')
                    : "";
    var className = side ? side : "dse-margin-".concat(space);
    return React.createElement("div", { className: className }, children);
};
export default Margin;
//# sourceMappingURL=Margin.js.map