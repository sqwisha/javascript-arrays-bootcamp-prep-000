var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBegginingOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}