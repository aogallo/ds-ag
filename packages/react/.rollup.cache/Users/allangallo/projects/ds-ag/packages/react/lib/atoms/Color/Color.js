import React from 'react';
import { Spacing } from '@ds.ag/foundation';
var Color = function (_a) {
    var hexCode = _a.hexCode, _b = _a.width, width = _b === void 0 ? Spacing.sm : _b, _c = _a.height, height = _c === void 0 ? Spacing.sm : _c;
    var clasName = "dse-width-".concat(width, " dse-height-").concat(height);
    return React.createElement("div", { className: clasName, style: { backgroundColor: hexCode } });
};
export default Color;
//# sourceMappingURL=Color.js.map