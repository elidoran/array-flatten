module.exports = reduce

function reduce (array) {
  return array.reduce(function (acc, value) {
    if (Array.isArray(value)) {
      acc.push.apply(acc, reduce(value))
    } else {
      acc.push(value)
    }

    return acc
  }, [])
}
