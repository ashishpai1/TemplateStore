
angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/templates', {
    templateUrl: 'templates/templates.html',
    controller: 'TemplatesCtrl'
  })

  .when('/templates/:templateId', {
  	templateUrl: 'templates/template-details.html',
  	controller: 'TemplatesDetailsCtrl'
  });

}])

.controller('TemplatesCtrl', [ '$scope', '$http', function($scope, $http) {
		$http.get("/json/templates.json").succeed(function(response){
				console.log("Response : " + response);
		});
}])

.controller('TemplatesDetailsCtrl', [ '$scope', function($scope) {
	console.log("Templates detail cntroller init...")
	console.log($scope);
}]);

