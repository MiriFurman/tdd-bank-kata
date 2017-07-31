/**
 * Created by mirif on 31/07/2017.
 */

import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TransactionRepository from "./TransactionRepository/TransactionRepository";
import Account from "./Account";
chai.use(sinonChai);

describe('TransactionRepository', () => {

  let transactionRepo;

  beforeEach(() => {
    transactionRepo = new TransactionRepository;
  });

  it('should call TransactionRepository.addTransaction on deposit with same amount', () => {
    sinon.stub(transactionRepo, 'addTransaction');
    account.deposit(500);
    expect(transactionRepo.addTransaction).to.have.been.calledWith(500);
  });

  it('should call TransactionRepository.addTransaction on withdraw with same amount when (balance - amount) > 0', () => {
    sinon.stub(transactionRepo, 'addTransaction');
    account.deposit(600);
    account.withdraw(500);
    expect(transactionRepo.addTransaction).to.have.been.calledWith(500);
  });

  it('should return Insufficient Funds Error on withdraw when (balance - amount) < 0', () => {
    expect(account.withdraw(500)).to.throw(/Insufficient Funds/);
  });


});