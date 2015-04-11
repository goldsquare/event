
var services = angular.module('event.services', [])
var url = "http://example-43910.onmodulus.net/api/events";

var eventIds = [];

services.factory('EventFactory', function ($http) {

       return {

          get: function($scope, $stateParams){
            $scope.likesArray = [];
          	$scope.numberOfEvents = [];
            $scope.myData = [];
            $scope.likes = [];
            var realLikes = [];
            
            var id = $stateParams.eventId;
            $scope.detail = "";

            // returun through the data in API
          	$http.get(url).success( function (data) {
              //console.log(data.length);
          		 for (var i = 0 ; i < data.length ; i ++)
          		 {
                  $scope.myData.push(data[i]);
                  $scope.numberOfEvents.push(i);
                  eventIds.push(data[i]._id);
                  $scope.likes.push(data[i].likes.length);
          		    
                  if(id == $scope.myData[i]._id)
                  {
                    $scope.detail = $scope.myData[i];
                  }

               }

                 $scope.myData.reverse();
                $scope.likes.reverse();
                eventIds.reverse();
            
               // console.log($scope.myData);

          	}).finally(function(){


             // Stop the ion-refresher from spinning
             $scope.$broadcast('scroll.refreshComplete');
             });
  }
   	  
          	
          }

       

});

