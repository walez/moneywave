"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Card = (function () {
    function Card(wave) {
        this.wave = wave;
    }
    Card.prototype.transfer = function (params, callback) {
        var options = {
            uri: '/v1/transfer',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Card.prototype.validateVerveCard = function (params, callback) {
        var options = {
            method: 'GET',
            uri: '/v1/transfer/charge/auth/card',
            qs: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Card.prototype.getCharge = function (params, callback) {
        var options = {
            uri: '/v1/get-charge',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Card.prototype.tokenizeCard = function (params, callback) {
        var options = {
            uri: '/v1/transfer/charge/tokenize/card',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Card.prototype.retryTransaction = function (params, callback) {
        var options = {
            uri: '/v1/transfer/disburse/retry',
            form: __assign({}, params)
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Card.prototype.getPreviousTransactions = function (id, callback) {
        var options = {
            uri: '/v1/transfer/' + id
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    return Card;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
