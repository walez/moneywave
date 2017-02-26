"use strict";
var Wallet = (function () {
    function Wallet(wave) {
        this.wave = wave;
    }
    Wallet.prototype.retryTransaction = function (params, callback) {
        var options = {
            uri: '/v1/transfer/disburse/retry',
            form: {}
        };
        return this.makeRequest(options, null, callback);
    };
    Wallet.prototype.getWalletBalance = function (callback) {
        var options = {
            uri: '/v1/wallet'
        };
        return this.makeRequest(options, null, callback);
    };
    Wallet.prototype.getPreviousTransactionsWallet = function (id, callback) {
        var options = {
            uri: '/v1/disburse/status',
            form: {}
        };
        return this.makeRequest(options, null, callback);
    };
    return Wallet;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Wallet;
