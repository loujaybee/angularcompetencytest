demoApp.controller('mainController', function($scope, countryService) {

    countryService.get().then(function(data){
        $scope.countries = data.data;
    }); 

    $scope.formSubmit = function(){

        // Guard against browsers where native form validation fails
        if(!$scope.exampleForm.$valid) return;

        console.log('submitted!');
    };
});