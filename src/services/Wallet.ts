import Moneywave from '../Moneywave';

export default class Wallet {
  private wave: Moneywave;

  public constructor(wave: Moneywave) {
    this.wave = wave;
  }

  public transfer(params, callback?) {

    let options = {
      uri: '/v1/disburse',
      form: {
        params
      }
    };

    return this.wave.makeRequest(options, true, false, callback);
  }

  public transferBulk(params, callback?) {

    let options = {
      uri: '/v1/disburse/bulk',
      form: {
        params
      }
    };

    return this.wave.makeRequest(options, true, false, callback);
  }

  public retryTransaction(params, callback?) {
    let options = {
      uri: '/v1/transfer/disburse/retry',
      form: {
        params
      }
    };

    return this.wave.makeRequest(options, true, false, callback);
  }

  public getBalance(callback?) {
    let options = {
      method: 'GET',
      uri: '/v1/wallet'
    };

    return this.wave.makeRequest(options, true, false, callback);
  }

  public getPreviousTransactions(params, callback?) {
    let options = {
      uri: '/v1/disburse/status',
      form: {
        params
      }
    };

    return this.wave.makeRequest(options, true, false, callback);
  }
}

interface RetryTransactionParams {
  id                        : String,
  recipient_account_number? : String,
  recipient_bank?           : String,
}

interface WalletToAccountTransferParams {
  lock          : String,
  amount        : Number,
  bankcode      : String,
  accountNumber : String,
  currency      : String,
  senderName    : String
}
