const { Singleton, NotSingleton } = require('./01_singleton')

describe('Singleton', () => {

  it('should set  values in different instances with NotSingleton class', () => {
    const instanceOne = new NotSingleton()
    const instanceTwo = new NotSingleton()

    instanceOne.setBaseUrl('https://api.weather.com/')
    instanceTwo.setBaseUrl('https://api.countries.com/')

    expect(instanceOne).toEqual(instanceTwo)
    expect(instanceOne.baseUrl).toEqual('https://api.weather.com/')
    expect(instanceTwo.baseUrl).toEqual('https://api.countries.com/')
  })

  it('should set values in unique instance with Singleton class', () => {
    const instanceOne = new Singleton()
    const instanceTwo = new Singleton()

    instanceOne.setBaseUrl('https://api.weather.com/')
    instanceTwo.setBaseUrl('https://api.countries.com/')

    expect(instanceOne).not.toEqual(instanceTwo)
    expect(instanceOne.baseUrl).toEqual('https://api.countries.com/')
    expect(instanceTwo.baseUrl).toEqual('https://api.countries.com/')
  })

})

