import Moneywave from '../Moneywave';

export default class Account {
  private wave: Moneywave;

  public constructor(wave: Moneywave) {
    this.wave = wave;
  }

  public transfer(params, callback?) {
    let defaults = {
      charge_with: 'account'
    };
    params = Object.assign(params, defaults);
    let options = {
      uri: '/v1/transfer',
      form: {
        ...params
      }
    };

    return this.wave.makeRequest(options, true, false, callback);
  }

  public validateAccount(params, callback?) {
    let options = {
      method: 'GET',
      uri: '/v1/transfer/charge/auth/account',
      qs: {
        ...params
      }
    };

    return this.wave.makeRequest(options, true, false, callback);
  }

  public retryTransaction(params, callback?) {
    let options = {
      uri: '/v1/transfer/disburse/retry',
      form: {
        ...params
      }
    };

    return this.wave.makeRequest(options, true, false, callback);
  }

  public getPreviousTransactions(id, callback?) {
    let options = {
      uri: '/v1/transfer/' + id
    };

    return this.wave.makeRequest(options, true, false, callback);
  }
}

interface RetryTransactionParams {
  id                        : String,
  recipient_account_number? : String,
  recipient_bank?           : String,
}


interface AccountToWalletTransferParams {
  firstname               : String,
  lastname                : String,
  phonenumber             : String,
  email                   : String,
  recipient               : String,
  card_no                 : String,
  cvv                     : String,
  expiry_year             : String,
  expiry_month            : String,
  apiKey                  : String,
  amount                  : Number,
  fee                     : Number,
  redirecturl             : String,
  medium                  : String,
  chargeCurrency          : String,
  disburseCurrency        : String,
  charge_with             : String,
  card_last4              : String,
  sender_account_number   : String,
  sender_bank             : String
}


interface AccountToAccountTransferParams {
  firstname               : String,
  lastname                : String,
  phonenumber             : String,
  email                   : String,
  recipient_bank          : String,
  recipient_account_number: String,
  card_no                 : String,
  cvv                     : String,
  expiry_year             : String,
  expiry_month            : String,
  apiKey                  : String,
  amount                  : Number,
  fee                     : Number,
  redirecturl             : String,
  medium                  : String,
  chargeCurrency          : String,
  disburseCurrency        : String,
  charge_with             : String,
  card_last4              : String,
  sender_account_number   : String,
  sender_bank             : String,
  recipient_id            : String,
  card_id                 : String,
  cycle                   : String,
  startDate               : String,
  endDate                 : String
}
