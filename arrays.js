var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBegginingOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function addElementToEndOfArray(array, element) {
  var newArray = [array, ...element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}