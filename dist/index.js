"use strict";
var Moneywave_1 = require("./Moneywave");
var Resource_1 = require("./Resource");
var Wallet_1 = require("./services/Wallet");
var Account_1 = require("./services/Account");
var Card_1 = require("./services/Card");
function MakeWave(options) {
    var wave = new Moneywave_1.default(options);
    return {
        resources: new Resource_1.default(wave),
        wallet: new Wallet_1.default(wave),
        account: new Account_1.default(wave),
        card: new Card_1.default(wave)
    };
}
exports.MakeWave = MakeWave;
