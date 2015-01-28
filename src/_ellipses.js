/**
Filter Name : ellipses
what I Do : shrink a text with ellipses at the end
@params : the net length of the string with ellipses
**/

angular.module('ngFilter').filter('ellipses', [function() {
  return function(input, maxLength) {
    var defaultLength = input.length;
    var length = maxLength ? maxLength : defaultLength;
    var str = input.length <= length ? input : input.substring(0, length - 3) + '...';
    return str;
  }
}]);
