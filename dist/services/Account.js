"use strict";
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
            form: {
                params: params
            }
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Account.prototype.validateAccount = function (params, callback) {
        var options = {
            method: 'GET',
            uri: '/v1/transfer/charge/auth/account',
            qs: {
                params: params
            }
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    Account.prototype.retryTransaction = function (params, callback) {
        var options = {
            uri: '/v1/transfer/disburse/retry',
            form: {
                params: params
            }
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
