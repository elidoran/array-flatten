module.exports = flatten

function flatten (array) {
  return flattenWithResult(array, [], 0)
}

function flattenWithResult (array, result, index) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      result.length += value.length
      flattenWithResult(value, result, index)
      index += value.length
    } else {
      result[index++] = value
    }
  }

  return result
}
