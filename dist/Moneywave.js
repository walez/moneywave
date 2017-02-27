"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var request = require("request-promise");
var NodeCache = require("node-cache");
var Moneywave = (function () {
    function Moneywave(options) {
        this.apiKey = options.apiKey;
        this.apiSecret = options.apiSecret;
        this.env = options.env || 'dev';
        this.baseUrl = this.env === 'dev' ? 'https://moneywave.herokuapp.com/' : 'https://live.moneywaveapi.co/';
        this.accessToken = null;
        this.useCache = options.cache || false;
        if (this.useCache)
            this.cache = new NodeCache({ stdTTL: 5400 });
    }
    Moneywave.prototype.getToken = function () {
        return this.cache.get("access-token");
    };
    Moneywave.prototype.storeToken = function (token) {
        return this.cache.set("access-token", token);
    };
    Moneywave.prototype.refreshToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.verifyMerchant()];
                    case 1:
                        token = _a.sent();
                        this.storeToken(token);
                        console.log('-------- Token Changed Yipee  ----------');
                        return [2 /*return*/, token];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Moneywave.prototype.verifyMerchant = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            uri: '/v1/merchant/verify'
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.makeRequest(options, false, true)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/, response.token];
                }
            });
        });
    };
    Moneywave.prototype.makeRequest = function (options, withToken, withCred, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var defaults, token, _a, requestOptions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        defaults = {
                            method: 'POST',
                            baseUrl: this.baseUrl,
                            json: true,
                            simple: true,
                            headers: {},
                            form: {}
                        };
                        if (!withToken)
                            return [3 /*break*/, 6];
                        token = void 0;
                        if (!this.useCache)
                            return [3 /*break*/, 3];
                        _a = this.getToken();
                        if (_a)
                            return [3 /*break*/, 2];
                        return [4 /*yield*/, this.refreshToken()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        token = _a;
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.verifyMerchant()];
                    case 4:
                        token = _b.sent();
                        _b.label = 5;
                    case 5:
                        defaults.headers.Authorization = token;
                        _b.label = 6;
                    case 6:
                        if (withCred) {
                            defaults.form = {
                                apiKey: this.apiKey,
                                secret: this.apiSecret
                            };
                        }
                        requestOptions = Object.assign({}, defaults, options);
                        return [2 /*return*/, callback ? request(requestOptions)
                                .then(function (response) { return callback(null, response); })
                                .catch(function (error) { return callback(error); })
                                : request(requestOptions)];
                }
            });
        });
    };
    return Moneywave;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Moneywave;
