/*
  Observer

  The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling
*/
function Click() {
  this.handlers = []  // observers
}

Click.prototype = {
  subscribe(fn) {
    this.handlers.push(fn)
  },
  unsubscribe(fn) {
    this.handlers = this.handlers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    })
  },

  fire(o, thisObj) {
    var scope = thisObj
    this.handlers.forEach((item) => {
      item.call(scope, o)
    })
  }
}

function run() {
  const clickHandler = (item) => {
    console.log(`fired: ${item}`)
  }

  const click = new Click()

  click.subscribe(clickHandler)
  click.fire('event #1')
  click.unsubscribe(clickHandler)

  click.fire('event #2')
  click.subscribe(clickHandler)
  click.fire('event #3')
}

module.exports = { run }
