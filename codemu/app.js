"use strict";
// let arr: number[] = [1,2,3,4,5];
// let arr2: Array<number> = [1,2,3,4,5]
// let tpl: [string, ...number[]];
// tpl = ['ab', 1,2,3,4,5];
// let tpl2: [string, string, ...number[]];
// tpl2 = ['asd', 'asd', 3,4];
// let tpl3: [number, boolean, ...string[]];
// tpl3 = [1, true, 'qw','qwe', 'qwewr']
var Week;
(function (Week) {
    Week[Week["monday"] = 0] = "monday";
    Week[Week["tuesday"] = 1] = "tuesday";
    Week[Week["wednesday"] = 2] = "wednesday";
    Week[Week["thursday"] = 3] = "thursday";
    Week[Week["friday"] = 4] = "friday";
    Week[Week["saturday"] = 5] = "saturday";
    Week[Week["sunday"] = 6] = "sunday";
})(Week || (Week = {}));
;
// let current: Week = Week.tuesday;
// let current: Week = 6;
// console.log(current);
var Month;
(function (Month) {
    Month[Month["january"] = 0] = "january";
    Month[Month["february"] = 1] = "february";
    Month[Month["march"] = 2] = "march";
    Month[Month["april"] = 3] = "april";
    Month[Month["may"] = 4] = "may";
    Month[Month["june"] = 5] = "june";
    Month[Month["jule"] = 6] = "jule";
    Month[Month["august"] = 7] = "august";
})(Month || (Month = {}));
