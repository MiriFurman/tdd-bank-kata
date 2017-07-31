/**
 * Created by mirif on 31/07/2017.
 */

import {normalizeDate} from "../util";
export default class TransactionRepository {
  constructor() {
    this.transactions = [];
  }

  addTransaction(amount,balance) {
    const now = new Date();
    this.transactions.unshift({
      date: normalizeDate(now),
      amount: amount,
      balance: balance
    })
  }

  getAll() {
    return this.transactions;
  }

}