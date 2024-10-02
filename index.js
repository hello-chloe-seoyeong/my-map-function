function myMap (cdFn) {
  return function (array) {
    const result = [];
    array.forEach((element, index) => {
      result.push(cdFn(element, index));
    });
    return result;
  };
}

module.exports = myMap;