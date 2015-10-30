

var integer = 5;
var array_example = [];
var object_example = {
  property_key1: value1,
  property_key2: value2,
  property_key3: value3
};

var functionExample = new Function(argument, parameter) {
  if (argument === 5) {
    console.log("Prints " + arugment);
  }
  else if (argument === 4) {
    console.log("Prints " + parameter);
  };
};
functionExample(5, "Calls the function");




