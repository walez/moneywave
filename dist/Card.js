"use strict";
var Card = (function () {
    function Card(wave) {
        this.wave = wave;
    }
    Card.prototype.retryTransaction = function (params, callback) {
        var options = {
            uri: '/v1/transfer/disburse/retry',
            form: {}
        };
        return this.makeRequest(options, null, callback);
    };
    Card.prototype.getPreviousTransactions = function (id, callback) {
        var options = {
            uri: '/v1/transfer/:id'
        };
        return this.makeRequest(options, null, callback);
    };
    return Card;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
