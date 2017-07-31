import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TransactionRepository from "./TransactionRepository/TransactionRepository";
import Account from "./Account";
import {normalizeDate} from "./util";
chai.use(sinonChai);

describe('Account', () => {

  let account, transactionRepo;

  beforeEach(() => {
    transactionRepo = new TransactionRepository;
    account = new Account(transactionRepo);
  });

  it('should create empty account and return empty transaction list', () => {
    expect(account.getStatement()).to.be.an('array').that.is.empty;
  });

  it('should call TransactionRepository.addTransaction on deposit with same amount', () => {
    sinon.stub(transactionRepo, 'addTransaction');
    account.deposit(500);
    expect(transactionRepo.addTransaction).to.have.been.calledWith(500);
  });

  it('should return deposit statement with amount 500 and balance 500 when first deposit 500', () => {
    const now = new Date();
    account.deposit(500);
    expect(account.getStatement()).to.have.deep.members([{
      date: normalizeDate(now),
      amount: 500,
      balance: 500
    }]);
  });

  it('should call TransactionRepository.addTransaction on withdraw with same amount when (balance - amount) > 0', () => {
    sinon.stub(transactionRepo, 'addTransaction');
    account.deposit(600);
    account.withdraw(500);
    expect(transactionRepo.addTransaction).to.have.been.calledWith(-500);
  });

  it('should return deposit statement with 2 transactions when first deposit 600 and then withdraw 500', () => {
    const now = new Date();
    account.deposit(600);
    account.withdraw(500);
    expect(account.getStatement()).to.have.deep.members([
      {
        date: normalizeDate(now),
        amount: -500,
        balance: 100
      },
      {
        date: normalizeDate(now),
        amount: 600,
        balance: 600
      },
    ]);
  });

  it('should return Insufficient Funds Error on withdraw when (balance - amount) < 0', () => {
    expect(() => account.withdraw(500)).to.throw('Insufficient Funds');
  });

});
