"use strict";
var Resource = (function () {
    function Resource(wave) {
        this.wave = wave;
    }
    Resource.prototype.getBanks = function (callback) {
        var options = {
            uri: '/banks'
        };
        return this.wave.makeRequest(options, null, null, callback);
    };
    Resource.prototype.validateBankAccount = function (accountNumber, bankCode, callback) {
        var options = {
            uri: '/v1/resolve/account',
            form: {
                account_number: accountNumber,
                bank_code: bankCode
            }
        };
        return this.wave.makeRequest(options, true, false, callback);
    };
    return Resource;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Resource;
