/**
Filter Name : urlEncodeDecode
what I Do : return an encoded or decoded URL
@params : the type of operation that need to be performed 'encode'/'decode'
**/

angular.module('ngFilter').filter('urlEncodeDecode', [function() {
  return function(input, type) {
    var type = type ? 'decode' : type;
    var uri = input;
    if (type == 'decode') {
      uri = decodeURIComponent(uri)
    } else if(type == 'encode'){
    	uri = encodeURIComponent(uri);
    }
    return uri;
  }
}]);
