function bubbleSort(array) {
  if (!array.length || array.length === 1) {
    return array
  } else {
    return swap(array)
  }

}

function swap(array) {
  for (let i = array.length - 1; i > 0; i--) {
    if (array[i] < array[i - 1]) {
      let origLeftValue = array[i]
      array[i] = array[i - 1]
      array[i - 1] = origLeftValue
      swap(array)
      return array
    }
  }
}
