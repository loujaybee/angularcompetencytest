demoApp.service("countryService", function($http){
    this.get = function(){
        return $http.get('https://restcountries.eu/rest/v1/region/Europe');
    };
});