class InMemoryStorage {
  constructor() {
    this.storage = {};
  }

  setItem(key, value) {
    this.storage[key] = value;
  }

  getItem(key) {
    return this.storage[key];
  }

  removeItem(key) {
    delete this.storage[key];
  }
}

const myStorage = new InMemoryStorage();

export default myStorage;