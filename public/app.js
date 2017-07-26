"use strict";

var demoApp = angular.module("demoApp", ['ui.router']);

demoApp.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    //Inside of the app config
    $stateProvider.state('home', {
        url: '/',
        template: '<da-form></da-form>'
    }).state('success', {
        url: '/success',
        template: '<da-success></da-success>'
    });
});