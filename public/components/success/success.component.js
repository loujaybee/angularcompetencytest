demoApp.component('daSuccess', {
    controller: function successComponent($scope, userService) {

        var $ctrl = this;

        $ctrl.name = userService.get().name;
    },
    template: `
            <h1> Application complete </h1>
            <p>{{$ctrl.name}} Thank you for applying to this useful government service</p>
        `
});
