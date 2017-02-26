import request = require('request-promise');
import NodeCache = require('node-cache');

export default class Moneywave {
  private apiKey;
  private apiSecret;
  private env;
  private baseUrl;
  private accessToken;
  private useCache;
  private cache;

  constructor(options: WaveOptions) {
    this.apiKey = options.apiKey;
    this.apiSecret = options.apiSecret;
    this.env = options.env || 'dev';
    this.baseUrl = this.env === 'dev' ? 'https://moneywave.herokuapp.com/' : 'https://live.moneywaveapi.co/';
    this.accessToken = null;
    this.useCache = options.cache || false;
    if(this.useCache)
      this.cache = new NodeCache({ stdTTL: 5400000});

  }

  /**
   * Retrieves Access Token from node cache if it exist
   * @return {token | null } Returns token  or null if there is none
   */
  private getToken() {
    return this.cache.get("access-token");
  }

  /**
   * Store Access Token in file
   * @return {[type]} [description]
   */
  private storeToken(token) {
    return this.cache.set("access-token", token);
  }

  private async refreshToken() {

    try{
      let token = await this.verifyMerchant();
      this.storeToken(token);
      console.log('-------- Token Changed Yipee  ----------');
      return token;
    }catch(error) {
      throw error;
    }

  }

  /**
   * Retrieves Merchant Access Token
   * @return {string} returns promise that resolves to token string
   */
  private async verifyMerchant() {
    let options = {
      uri: '/v1/merchant/verify'
    };
    let response;

    try{
      response = await this.makeRequest(options, false, true);
    }catch (error){
      throw error;
    }
    return response.token;
  }

  public async makeRequest(options, withToken?: boolean, withCred?: boolean, callback?) {
    let defaults = {
      method: 'POST',
      baseUrl: this.baseUrl,
      json: true,
      simple:true,
      headers: {},
      form: {}
    };

    if(withToken) {
      let token;
      if(this.useCache) {
        token = this.getToken() || await this.refreshToken();
      }else {
        token = await this.verifyMerchant();
      }
      defaults.headers.Authorization = token;
    }

    if(withCred){
      defaults.form = {
        apiKey: this.apiKey,
        secret: this.apiSecret
      }
    }

    let requestOptions = Object.assign({}, defaults, options);

    //Hack request-promise doesnt pass promise rejection reason to callback
    return  callback ? request(requestOptions)
                        .then((response) => callback(null, response))
                        .catch((error) => callback(error))
                     : request(requestOptions);
  }

}

interface WaveOptions {
  apiKey    : String,
  apiSecret : String,
  cache?    : Boolean,
  env?      : String
}
