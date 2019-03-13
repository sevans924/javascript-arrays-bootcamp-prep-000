var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles']

var array = []

function addElementToBeginningOfArray(array, element){
  ['element', ...array];
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  [...array, 'element'];
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
