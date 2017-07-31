/**
 * Created by mirif on 31/07/2017.
 */
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Account from "../Account";
import TransactionRepository from "../TransactionRepository/TransactionRepository";
import {normalizeDate} from "../util";
chai.use(sinonChai);

describe('Transaction Statement', () => {
  it('should print transactions in descending order in specific format', () => {
    const account = new Account(new TransactionRepository());
    const now = new Date();
    account.deposit(1000);
    account.withdraw(100);
    account.deposit(500);
    expect(account.getStatement()).to.have.deep.ordered.members([
      {
        date: normalizeDate(now),
        amount: 500,
        balance: 1400
      },
      {
        date: normalizeDate(now),
        amount: -100,
        balance: 900
      },
      {
        date: normalizeDate(now),
        amount: 1000,
        balance: 1000
      }
    ]);
  });



});