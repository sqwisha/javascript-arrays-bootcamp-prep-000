var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ];

function addElementToBeginningOfArray(array, element) {
  var beginningAddedArray = [element, ...array];
  return beginningAddedArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var endAddedArray = [array, ...element];
  return endAddedArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.slice();
  return array;
}