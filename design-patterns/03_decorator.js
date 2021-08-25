/*
  Decorators

  Decorator is simply a way of wrapping one piece of code with another — literally “decorating” it
*/
function logMethodCallDecorator(targetMethod) {
  const decoratedFunction = (...args) => {
    // Real use case: Generate log in Backend Service that gets some sensitive data
    console.log(`🔎 ¡Important method invoked!: ${targetMethod.name} with arguments ${args}`)

    targetMethod(...args)
  }
  return decoratedFunction
}

function printNumbersWithArrows(...args) {
  console.log(args.join(' => '))
}
function getBankAccountData(userInfo, options) {
  return Promise.resolve({
    accountId: 'b32da2de424367b0e8d9'
  })
}
// logMethodCallDecorator se encarga de "decorar" el método objetivo y darle nueva funcionalidades. En este caso podemos usar el método y aparecerá un log que indicará cada vez que fue llamado el método
const printNumbersDecorated = logMethodCallDecorator(printNumbersWithArrows)

//printNumbersWithArrows(1, 15, 30, 50, 300, 500)
//printNumbersDecorated(1, 15, 30, 50, 300, 500)

// Decorated function
const getBankAccountDecorated = logMethodCallDecorator(getBankAccountData)

// getBankAccountData({ id: 'b32da2de424367b0'}, { hidePersonalInfo: true })
// getBankAccountDecorated({ id: 'b32da2de424367b0'}, { hidePersonalInfo: true })

module.exports = {
  functionsForDecorate: {
    printNumbersWithArrows,
    getBankAccountData
  },
  logMethodCallDecorator
}
