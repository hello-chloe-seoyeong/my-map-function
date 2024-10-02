function myMap (cdFn) {
  return function (array) {
    const result = [];
    array.forEach((element, index) => {
      result.push(cdFn(element, index));
    });
    return result;
  };
}

function add (a, b) {
  return a + b;
}

module.exports = {
  myMap,
  add
};