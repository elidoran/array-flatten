module.exports = flatten

function flatten (array) {
  return flattenWithResult(array, [])
}

function flattenWithResult (array, result) {
  // change: cache length in a new var
  for (var i = 0, end = array.length; i < end; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      flattenWithResult(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}
