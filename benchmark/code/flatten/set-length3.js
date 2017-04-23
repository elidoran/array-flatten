module.exports = flatten

function flatten (array) {
  return flattenWithResult(array, [])
}

function flattenWithResult (array, result) {
  var index = result.length - 1

  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      result.length += value.length
      flattenWithResult(value, result)
      index += value.length
    } else {
      result[++index] = value
    }
  }

  return result
}
