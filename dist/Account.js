"use strict";
var Account = (function () {
    function Account(wave) {
        this.wave = wave;
    }
    Account.prototype.retryTransaction = function (params, callback) {
        var options = {
            uri: '/v1/transfer/disburse/retry',
            form: {}
        };
        return this.makeRequest(options, null, callback);
    };
    Account.prototype.getPreviousTransactions = function (id, callback) {
        var options = {
            uri: '/v1/transfer/:id'
        };
        return this.makeRequest(options, null, callback);
    };
    return Account;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Account;
