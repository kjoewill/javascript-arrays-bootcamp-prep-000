var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  console.log(">>>>>>>>>>>>>>>Test")
  console.log(array)
  array.unshift(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}