function Bank() {

  this.accountName = 'Isaac';
  this.accountNumber = 1;
  this.bankStatement = [];
  this.DEFUALT_BALANCE = 1000;
  this.balance = this.DEFUALT_BALANCE;
}

Bank.prototype.getAccountName = function () {
  return this.accountName;
};

Bank.prototype.getAccountNumber = function () {
  return this.accountNumber;
};

Bank.prototype.getBalance = function () {
  return this.balance
};

Bank.prototype.deposit = function (damount, ddate) {

  this.balance += damount

  var dtransaction = {'Amount':damount, 'Date':ddate, 'Indicator':'C', 'Balance':this.balance};

  this.statement.push(dtransaction)
  console.log(this.statement)
};

Bank.prototype.withdraw = function (wamount, wdate) {

  this.balance -= wamount

  var wtransaction = {'Amount':wamount, 'Date':wdate, 'Indicator':'D', 'Balance':this.balance};

  this.statement.push(wtransaction)
  console.log(this.statement)
};

Bank.prototype.printStatement = function () {
  return this.BankStatement
};
