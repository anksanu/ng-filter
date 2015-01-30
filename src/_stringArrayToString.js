/**
Filter Name : stringArrayToString
what I Do : convert and array of string into a single string with ',' sperated array entities
@params : Number or elements that need to be added in the string
**/

angular.module('ngFilter').filter('stringArrayToString', [function() {
  return function(input, maxLength) {
    var resultString = '';
    maxLength = !maxLength ? input.length : maxLength;
    maxLength = input.length < maxLength ? input.length : maxLength;
    if(!maxLength)
      return resultString;
    if (maxLength == 1) {
      return input[0];
    }
    for (var i = 0; i < (maxLength - 2); i++) {
    	resultString += input[i] + ', ';
    }
    resultString += input[maxLength-2] + ' and ' + input[maxLength-1]
    return resultString;
  }
}]);
