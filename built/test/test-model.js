"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require("../lib/index");
var TestModel = (function (_super) {
    __extends(TestModel, _super);
    function TestModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestModel.prototype.table = function () {
        return "TestModel";
    };
    return TestModel;
}(index_1.OAFModel));
exports.TestModel = TestModel;
