demoApp.controller('mainController', function($scope, countryService) {

    countryService.get().then(function(data){
        $scope.countries = data.data;
    }); 
});