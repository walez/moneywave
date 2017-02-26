import Moneywave from './Moneywave';

export default class Resource {
  private wave: Moneywave;

  public constructor(wave: Moneywave) {
    this.wave = wave;
  }

  public getBanks(callback?) {
    let options = {
      uri: '/banks'
    };

    return this.wave.makeRequest(options, null, null, callback);
  }

  public validateBankAccount(accountNumber, bankCode, callback?) {
    let options = {
      uri: '/v1/resolve/account',
      form: {
        account_number: accountNumber,
        bank_code: bankCode
      }
    };

    return this.wave.makeRequest(options, true, false, callback);
  }
}
