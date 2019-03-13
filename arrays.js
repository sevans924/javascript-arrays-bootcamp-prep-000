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

function accessElementInArray(array, idex){
  console.log(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice(1);
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){}

function removeElementFromEndOfArray(array){}
