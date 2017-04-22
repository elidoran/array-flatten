var benchmark = require('./benchmark')

var ask = require('readline').createInterface({
  input : process.stdin,
  output: process.stdout,
})

console.log('array-flatten benchmark running as', process.pid,
  ~process.execArgv.indexOf('--turbo') ? '- turbo' : '')

ask.question('begin? (y/N)  ', function (answer) {

  ask.close()

  if (answer && (answer[0] === 'y' || answer[0] === 'Y')) {
    benchmark()
  }
})
