"use strict";
var OAFPromiseState;
(function (OAFPromiseState) {
    OAFPromiseState[OAFPromiseState["pending"] = 0] = "pending";
    OAFPromiseState[OAFPromiseState["resolved"] = 1] = "resolved";
    OAFPromiseState[OAFPromiseState["rejected"] = 2] = "rejected";
})(OAFPromiseState = exports.OAFPromiseState || (exports.OAFPromiseState = {}));
var OAFPromise = (function () {
    function OAFPromise() {
        this.state = OAFPromiseState.pending;
        // Promise.reje
    }
    OAFPromise.prototype.resolve = function (value) {
        this.state = OAFPromiseState.resolved;
        this.value = value;
    };
    OAFPromise.prototype.reject = function (error) {
        this.state = OAFPromiseState.rejected;
        this.error = error;
    };
    OAFPromise.resolve = function (value) {
        var promise = new OAFPromise();
        promise.resolve(value);
        return promise;
    };
    OAFPromise.reject = function (error) {
        var promise = new OAFPromise();
        promise.reject(error);
        return promise;
    };
    return OAFPromise;
}());
exports.OAFPromise = OAFPromise;
