const {
  functionsForDecorate,
  logMethodCallDecorator
} = require('./03_decorator')

describe('Decorator Design Pattern', () => {
  beforeEach(() => {
    console.log = jest.fn()
  })

  it('should decorate printNumbersWithArrows Method', () => {
    const { printNumbersWithArrows } = functionsForDecorate

    const decorated = logMethodCallDecorator(printNumbersWithArrows)
    decorated(1,2,3,4)

    expect(console.log).toHaveBeenCalledWith(`🔎 ¡Important method invoked!: printNumbersWithArrows with arguments [1,2,3,4]`)
  })

  it('should decorate getBankAccountData', () => {
    const { getBankAccountData } = functionsForDecorate

    const decorated = logMethodCallDecorator(getBankAccountData)
    decorated({ id: 'b32da2de424367b0'}, { hidePersonalInfo: true })

    expect(console.log).toHaveBeenCalledWith(`🔎 ¡Important method invoked!: getBankAccountData with arguments [{"id":"b32da2de424367b0"},{"hidePersonalInfo":true}]`)
  })
})
