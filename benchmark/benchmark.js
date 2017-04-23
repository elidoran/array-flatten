var Suite = require('benchmarked')
var path = require('path')

function name (filename) {
  return path.basename(path.dirname(filename)) + '/' + path.basename(filename, '.js')
}

module.exports = function () {
  var sample = [1, [2, [3, [4], 3], 2], 1]

  var flattenSuite = new Suite({
    cwd: __dirname,
    fixtures: 'fixtures/flatten/*.js',
    code: 'code/flatten/*.js',
    name: name,
    sample: [sample]
  })

  flattenSuite.run()

  var argsSuite = new Suite({
    cwd: __dirname,
    fixtures: 'fixtures/arguments/*.js',
    code: 'code/arguments/*.js',
    name: name,
    sample: sample
  })

  argsSuite.run()

  var depthSuite = new Suite({
    cwd: __dirname,
    fixtures: 'fixtures/depth/*.js',
    code: 'code/depth/*.js',
    name: name,
    sample: [sample, 2]
  })

  depthSuite.run()
}
