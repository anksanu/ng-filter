/**
Filter Name : stringTrim
what I Do : removes extra spaces from a string
**/

angular.module('ngFilter').filter('stringTrim', [function() {
  return function(input) {
    var stringArray = input.split(' ');
    var newStringArray = [];
    stringArray.map(function(value, index) {
      if (value) {
        newStringArray.push(value);
      }
    });
    return newStringArray.join(' ');
  }
}]);
