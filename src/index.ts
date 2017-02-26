import request = require('request-promise');

import Moneywave from './Moneywave';
import Resource  from './Resource';
import Wallet    from './services/Wallet';
import Account   from './services/Account';
import Card      from './services/Card';

export function MakeWave(options) {
  let wave = new Moneywave(options);
  return {
    resources : new Resource(wave),
    wallet    : new Wallet(wave),
    account   : new Account(wave),
    card      : new Card(wave)
  };
}
