"use strict";
var Wallet = (function () {
    function Wallet(wave) {
        this.wave = wave;
    }
    Wallet.prototype.transfer = function (params, callback) {
        var options = {
            uri: '/v1/disburse',
            form: {
                params: params
            }
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Wallet.prototype.transferBulk = function (params, callback) {
        var options = {
            uri: '/v1/disburse/bulk',
            form: {
                params: params
            }
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Wallet.prototype.retryTransaction = function (params, callback) {
        var options = {
            uri: '/v1/transfer/disburse/retry',
            form: {
                params: params
            }
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
            form: {
                params: params
            }
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    return Wallet;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Wallet;
