"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Account = (function () {
    function Account(wave) {
        this.wave = wave;
    }
    Account.prototype.transfer = function (params, callback) {
        var defaults = {
            charge_with: 'account'
        };
        params = Object.assign(params, defaults);
        var options = {
            uri: '/v1/transfer',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Account.prototype.validateAccount = function (params, callback) {
        var options = {
            method: 'GET',
            uri: '/v1/transfer/charge/auth/account',
            qs: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Account.prototype.retryTransaction = function (params, callback) {
        var options = {
            uri: '/v1/transfer/disburse/retry',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Account.prototype.getPreviousTransactions = function (id, callback) {
        var options = {
            uri: '/v1/transfer/' + id
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    return Account;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Account;
