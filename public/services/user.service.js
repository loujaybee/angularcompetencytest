"use strict";

demoApp.service("userService", function ($http) {

    // Levarage closure private scoping
    var user = {};

    this.set = function (data) {
        return user = data;
    };
    this.get = function () {
        return user;
    };
    this.create = function (data) {
        return $http.post('/api/userdata', data);
    };
});