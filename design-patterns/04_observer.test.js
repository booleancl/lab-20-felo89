const { run } = require('./04_observer')

describe('Observer Design Pattern', () => {
  beforeEach(() => {
    console.log = jest.fn()
  })

  it('should log based on subscriptors', () => {

    run()

    expect(console.log).toHaveBeenCalledWith('fired: event #1')
    expect(console.log).toHaveBeenCalledWith('fired: event #2')
    expect(console.log).toHaveBeenCalledWith('fired: event #3')
    expect(console.log).toHaveBeenCalledWith('fired: event #4')
  })

})
