(function () {
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope, $http) {

    $scope.setup = function(){
      $http.get('api/v1/people.json').then(function(response) {
      $scope.people = response.data;
    })
    };

    // $scope.displayInfo = function(index) {
    //   $scope.person.bio 
    // };

    $scope.showBio = function(person) {
      // $scope.people[index].bioVisible = false;
    // if (person.bioVisible === false) {
    //   person.bioVisible === true;
    // }
    // else {
    //   person.bioVisible = false;
    // }
    person.bioVisible = !person.bioVisible;
    };

    $scope.addPerson = function(name, bio) {
      var newPerson = {
        name: name,
        bio: bio,
        bioVisible: false
      };

      $scope.people.push(newPerson);
    }

    $scope.deletePerson = function(index) {
      $scope.people.splice(index, 1);
    };

    window.$scope = $scope;
  });

}) ();
