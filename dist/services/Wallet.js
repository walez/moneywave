"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Wallet = (function () {
    function Wallet(wave) {
        this.wave = wave;
    }
    Wallet.prototype.transfer = function (params, callback) {
        var options = {
            uri: '/v1/disburse',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Wallet.prototype.transferBulk = function (params, callback) {
        var options = {
            uri: '/v1/disburse/bulk',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Wallet.prototype.retryTransaction = function (params, callback) {
        var options = {
            uri: '/v1/transfer/disburse/retry',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Wallet.prototype.getBalance = function (callback) {
        var options = {
            method: 'GET',
            uri: '/v1/wallet'
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Wallet.prototype.getPreviousTransactions = function (params, callback) {
        var options = {
            uri: '/v1/disburse/status',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    return Wallet;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Wallet;
