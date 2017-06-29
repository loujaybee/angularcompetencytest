demoApp.directive('daForm', function(countryService, $state, userService) {
    return {
        restrict: 'E',
        link: function($scope) {

            countryService.get().then(function(data) {
                $scope.countries = data.data;
            });

            $scope.formSubmit = function() {

                // Guard against browsers where native form validation fails
                if (!$scope.exampleForm.$valid) return;

                $state.go('success');

                console.log('submitted!');
                
                userService.set({
                    name: $scope.name
                });
            };

        },
        scope: {},
        template: `
          <form name="exampleForm" ng-submit="formSubmit()">
            <h1>Some useful government service</h1>

            <label for="name">Name</label>
            <input ng-model="name" required name="name" type="text">
            <br>

            <label for="age">Age</label>
            <input ng-model="age" required name="age" type="text">
            <br>
            
            <label for="sex">Sex</label>
            <span>Male</span>
            <input ng-model="sex" required type="radio" name="sex" value="male" checked>
            <span>Female</span>
            <input ng-model="sex" required type="radio" name="sex" value="female" checked>
            <br>
    
            <label for="country">Country</label>
            <select required ng-model="country" name="country" ng-options="country.name as country.name for country in countries">
            </select>
            <br>

            <button type="submit">Apply</button>

            <div ng-if="!exampleForm.$valid && exampleForm.$submitted">
                Please fill in everything!
            </div>

            <div ui-view></div>
        </form>
        `
    };
});