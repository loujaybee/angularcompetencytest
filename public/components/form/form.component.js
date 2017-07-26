demoApp.component('daForm', {
    controller: function daFormController (countryService, userService, $state) {

        var $ctrl = this; 

        $ctrl.user = {};

        countryService.get().then(function(data) {
            $ctrl.countries = data.data;
        });

        $ctrl.formSubmit = function() {

            // Guard against browsers where native form validation fails
            if (!$ctrl.exampleForm.$valid) {
                $ctrl.formIsIncorrect = true;
                return;
            }

            userService.create($ctrl.user)
                .then(() => userService.set($ctrl.user))
                .then(() => $state.go('success'))
        };

    },
    template: `
     <div class="form_component">
      <form name="$ctrl.exampleForm" ng-submit="$ctrl.formSubmit()">
        <h1>Some Useful Government Service</h1>

        <label for="name">Name</label>
        <input ng-model="$ctrl.user.name" required name="name" type="text">
        <br>

        <label for="sex">Sex</label>
        <span>Male</span>
        <input ng-model="$ctrl.user.sex" required type="radio" name="sex" value="male" checked>
        <span>Female</span>
        <input ng-model="$ctrl.user.sex" required type="radio" name="sex" value="female" checked>
        <br>

        <label for="age">Age</label>
        <input ng-model="$ctrl.user.age" required name="age" type="number">
        <br>

        <label for="country">Country</label>
        <select required ng-model="$ctrl.user.country" name="country" ng-options="country.name as country.name for country in $ctrl.countries">
        </select>
        <br>
        <button type="submit">Apply</button>

        <div ng-if="(!$ctrl.exampleForm.$valid && $ctrl.exampleForm.$submitted) || $ctrl.formIsIncorrect">
            Please ensure all fields are populated.
        </div>
      </form>
    </div>
    `
});
