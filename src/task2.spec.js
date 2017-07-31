import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

class AsyncCollabarator {
  fetch(callback) {
    callback();
  }
}

class ObjectUnderTest {
  constructor(asyncCallaborator) {
    this.asyncCallaborator = asyncCallaborator;
  }

  fetchAsyncStuff(callback) {
    this.asyncCallaborator.fetch(callback);
  }
}

describe('ObjectUnderTest', () => {
  const asyncCallaborator = new AsyncCollabarator();
  const objectUnderTest = new ObjectUnderTest(asyncCallaborator);
  it('should call AsyncCollabarator.fetch() when calling ObjectUnderTests.fetchAsyncStuff()', () => {
    sinon.stub(asyncCallaborator, 'fetch');
    objectUnderTest.fetchAsyncStuff();
    expect(asyncCallaborator.fetch).to.have.been.called;
  });
  it('should check that the callback passed to ObjectUnderTests.fetchAsyncStuff() is called if AsyncCollabarator.fetch() is successful', () => {
    const spy = sinon.spy();
    sinon.stub(asyncCallaborator, 'fetch').callsArg(0);
    objectUnderTest.fetchAsyncStuff(spy);
    expect(spy).to.have.been.called;
  });
  afterEach(() => {
    asyncCallaborator.fetch.restore();
  });
});
