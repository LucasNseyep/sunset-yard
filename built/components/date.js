"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Date;
var date_fns_1 = require("date-fns");
function Date(_a) {
    var dateString = _a.dateString;
    var date = (0, date_fns_1.parseISO)(dateString);
    return <time dateTime={dateString}>{(0, date_fns_1.format)(date, 'LLLL d, yyyy')}</time>;
}
