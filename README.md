# MoneywaveJS
NodeJS client for accessing Moneywave services

### Installation

```
npm install moneywave
```

### Usage

```js
var Moneywave = require('moneywave');

var options = {
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_SECRET',
  cache: true
}
var moneywave = Moneywave.MakeWave(options);

//Promised based when no callback given
moneywave.resources.validateBankAccount("0690000004", "044")
  .then((val) => console.log(val))
  .catch((error) => console.log(error.error));

//Pass callback as last argument if you want to use callbacks
moneywave.resources.validateBankAccount("0690000004", "044", (err, value) => {
  console.log(err, value)
});

```

The `MakeWave` function returns an object with the services below

### Services

- card
  - transfer
  - validateVerveCard
  - getCharge
  - tokenizeCard
  - retryTransaction
  - getPreviousTransactions
- account
  - transfer
  - validateAccount
  - getCharge
  - retryTransaction
  - getPreviousTransactions
- wallet
  - transfer
  - transferBulk
  - retryTransaction
  - getBalance
  - getPreviousTransactions
- resources
  - getBanks
  - validateBankAccount


### Todo

- Add tests
- Add documentation
