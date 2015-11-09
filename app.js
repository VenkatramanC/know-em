//MODULES
 var knowEmo = angular.module('knowEmo', ['ngRoute']);
//ROUTES
    knowEmo.config(function ($routeProvider) {
      
    $routeProvider
    
    .when('/' , {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })

    .when('/about' , {
      templateUrl: 'pages/about.html',
      controller: 'aboutController'
    })


    .when('/blog' , {
      templateUrl: 'pages/blog.html',
      controller: 'blogController'
    })


    .when('/contact' , {  
      templateUrl: 'pages/contact.html',
      controller: 'contactController'
    })

    .when('/kids' , {  
      templateUrl: 'pages/kids.html',
      controller: 'kidsController'
    })

    .when('/boys' , {
      templateUrl: 'pages/boys.html',
      controller: 'boysController'
    })
    
    .when('/login' , {
      templateUrl: 'pages/login.html',
      controller: 'loginController'
    })

    .when('/blog' , {
      templateUrl: 'pages/blog.html',
      controller: 'blogController'
    })



});
//CONTROLLERS 
   

   knowEmo.controller("homeController" , function() {
       
   });


 //knowEmo.controller("blogController" , function() {

//});

 //knowEmo.controller("contactController" , function() {

//});

 //knowEmo.controller("kidsController" , function() {

//});

 //knowEmo.controller("boysController" , function() {

//});

 //knowEmo.controller("loginController" , function() {

//});

 //knowEmo.controller("blogController" , function() {

//});


