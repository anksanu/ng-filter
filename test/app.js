angular.module('AnkFilters',['ngFilter']);

angular.module('AnkFilters').controller('ankFilterCtrl',[
	'$scope','$filter',
	function($scope,$filter){
		var text = "this is an ellipses filter";
		var arrayOfString1 = ['alpha'];
		var arrayOfString2 = ['alpha','beta','gaama'];
		var arrayOfString3 = ['alpha','beta'];
		var arrayOfString4 = ['alpha','beta','gaama','delta'];

		function log(){
			// console.log(arguments[0]);
		}

		log('Filter Name stringArrayToString');
		log('Test Arrays ->');
		log(arrayOfString1);
		log(arrayOfString2);
		log(arrayOfString3);
		log(arrayOfString4);
		log('With Null Params ->');
		log($filter('stringArrayToString')(arrayOfString1));
		log($filter('stringArrayToString')(arrayOfString2));
		log($filter('stringArrayToString')(arrayOfString3));
		log($filter('stringArrayToString')(arrayOfString4));
		log('With Param 3 ->');
		log($filter('stringArrayToString')(arrayOfString1,3));
		log($filter('stringArrayToString')(arrayOfString2,3));
		log($filter('stringArrayToString')(arrayOfString3,3));
		log($filter('stringArrayToString')(arrayOfString4,3));
		log('With Param 8 ->');
		log($filter('stringArrayToString')(arrayOfString1,8));
		log($filter('stringArrayToString')(arrayOfString2,8));
		log($filter('stringArrayToString')(arrayOfString3,8));
		log($filter('stringArrayToString')(arrayOfString4,8));
		log($filter('stringArrayToString')([],8));


		var uri = "http://test.com?text=abc bcd";
		var uriE = "http%3A%2F%2Ftest.com%3Ftext%3Dabc%20bcd";
		log('Filter Name urlEncodeDecode');
		log('Test Url ->');
		log(uri);
		log(uriE);
		log('URI encoding ->');
		log($filter('urlEncodeDecode')(uri));
		log('URI Decoding ->');
		log($filter('urlEncodeDecode')(uriE));
		log($filter('urlEncodeDecode')(uriE,'decode'));
}]);