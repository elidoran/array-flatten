module.exports = flatten

function flatten (array) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      value.unshift(i, 1)
      array.splice.apply(array, value)
      --i
    }
  }
}
