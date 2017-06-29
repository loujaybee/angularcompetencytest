demoApp.service("userService", function($http){

    // Levarage closure private scoping
    let user = {};

    this.set = (data) => user = data
    this.get = () => user;

    this.create = (data) => $http.post('/api/userdata', data);
});