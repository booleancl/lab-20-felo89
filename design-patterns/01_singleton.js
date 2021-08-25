/*
  Singleton

  Is a software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.

  https://en.wikipedia.org/wiki/Singleton_pattern
*/

class Singleton {
  constructor() {
    this.baseUrl = ''

    if (!Singleton._instance) {
      Singleton._instance = this
    }

    return Singleton._instance;
  }

  static getInstance() {
    return Singleton._instance;
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl
    return this.baseUrl
  }
}

class NotSingleton {
  constructor() {
    this.baseUrl = ''
  }
  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl
  
    return this.baseUrl
  }
}

module.exports = {
  Singleton,
  NotSingleton
}
