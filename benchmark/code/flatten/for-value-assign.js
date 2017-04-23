module.exports = flatten

function flatten (array) {
  return flattenWithResult(array, [])
}

function flattenWithResult (array, result) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      flattenWithResult(value, result)
    } else {
      // change: assign to length instead of push()
      result[result.length] = value
    }
  }

  return result
}
