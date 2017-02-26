var Moneywave = require('./dist');

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
moneywave.Resource.validateBankAccount("0690000004", "044", (err, value) => {
  console.log(err, value)
});
