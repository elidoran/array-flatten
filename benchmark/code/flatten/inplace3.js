module.exports = flatten

function flatten (array, arg2) {
  var i, value
  for (i = 0; i < array.length; ) {
    value = array[i]

    if (Array.isArray(value)) {
      value.unshift(i, 1)
      array.splice.apply(array, value)
    } else {
      i++
    }
  }
}
