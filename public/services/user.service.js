demoApp.service("userService", function($http){

    // Levarage closure private scoping
    let user = {};

    this.set = function(data){
        user = data;
    };
});