(function () {
    'use strict'; //permite identificar variables no asignadas.
      angular.module('LunchCheck', [])

      .controller('LunchCheckController', LunchCheckController);
      
      LunchCheckController.$inject= ['$scope'];
      function LunchCheckController($scope){
        $scope.name = "";

        $scope.LunchMessage = function(){


        }



      }
    
    })();