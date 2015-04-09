var services = angular.module('date.services', [])

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


services.factory('DateFactory', function ($http) {

       return {

          get: function($scope){
          // 	var today  = new Date();
          // $scope.month = monthNames[today.getMonth()];
          // $scope.day = today.getDate();

          }

       }

});
