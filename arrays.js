var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  var newArray  = array.slice(1);
  //removes first element from the array, should not mutate original
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
}

function addElementToBeginningOfArray(array, element) { 
  array = [element, ...array];
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function destructivelyAddElementToEndOfArray(array) {
  return array.push();
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element);
}

