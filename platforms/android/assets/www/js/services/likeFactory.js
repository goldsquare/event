

var services = angular.module('like.services', [])

services.factory('LikeFactory', function ($http) {

eventIds = [];
var myData = new Firebase('https://vivid-inferno-434.firebaseio.com');

            return{
              like: function($scope, id){ 
                
                
                  if(currentUser == "")
                    {
                      alert('must be logged in to like');
                    }
                    else
                    {
                    
                    var url = "http://example-43910.onmodulus.net/api/events";
                   var eventId = eventIds[id];

                   // var likesArray = [];           
                    // get current user name and profile image

                    $http.get(url+"/"+eventId
                         ).success( function (data) {
                              var match  = false;
                              // check if user has already liked this
                             for(var i = 0; i < data.likes.length; i++)
                             {
                                    if (currentUser == data.likes[i].user)
                                    {
                                      console.log('already liked this');
                                      match = true;
                                      // erase the like from the like array
                                     data.likes.splice(i, 1);
                                    // console.log(data.likes);
                                     // load new likearray into database
                                     $http.put(url+"/"+eventId, {likes : data.likes} ).success
                                    ( function (data) {

                                      console.log('deleting like');
                                       // console.log(data);
                                        $scope.likes[id] = data.likes.length -1;
                                         var icon = document.getElementById('likeIcon'+id);
                                        icon.style.color = "grey";
                                        
                                     });
                                  }
                              }

                                  console.log(match);
                                  if (!match)
                                  {
                                    console.log('adding like');
                                   //  //   console.log('no match adding like');
                                      data.likes.push({user : currentUser, profileUrl : currentUserImage});

                                        $http.put(url+"/"+eventId, {likes : data.likes} ).success
                                        ( function (data) {

                                                    console.log(data);
                                                    $scope.likes[id] = data.likes.length +1;
                                        });

                                        var icon = document.getElementById('likeIcon'+id);
                                        icon.style.color = "red";
                                        move('#likeIcon'+id)
                                      .rotate(360)
                                      .end();
                                      }
                            
                    });            
                      
                    
        
              }
              
                  }
            }

});