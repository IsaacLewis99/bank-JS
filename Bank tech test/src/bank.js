function Bank() {

//this.TEST_DEFUALT_BALANCE = 1000;
this.DEFUALT_BALANCE = 0;
this.balance = this.DEFUALT_BALANCE
this.bankStatement = []
}



Bank.prototype.getAccountName = function () {
 return this.accountName;
};

Bank.prototype.getAccountNumber = function () {
 return this.accountNumber;
};

Bank.prototype.Deposit = function (amount) {
  this.DEFUALT_BALANCE += amount;
};
Bank.prototype.withdraw = function (amount) {
  if ((this.balance - amount) < this.DEFUALT_BALANCE) {
  console.log('Insufficient funds');
  return;
};
this.balance -= amount;
