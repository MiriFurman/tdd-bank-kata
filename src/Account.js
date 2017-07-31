/**
 * Created by borisl on 30/07/2017.
 */

export default class Account {

    constructor(transactionRepository) {
      this.transactionRepository = transactionRepository;
      this.balance = 0;
    }

    deposit(amount) {
      this.balance += amount;
      this.transactionRepository.addTransaction(amount, this.balance);
    }

    withdraw(amount) {
        if (this.balance - amount < 0) {
            throw new Error("Insufficient Funds");
        } else {
            this.balance -= amount;
            this.transactionRepository.addTransaction(-amount, this.balance);
        }
    }

    getStatement() {
        return this.transactionRepository.getAll();
    }
}
