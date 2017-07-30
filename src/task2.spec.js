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