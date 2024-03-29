(function () {
    'use strict'; //permite identificar variables no asignadas.
      angular.module('LunchCheck', [])

      .controller('LunchCheckController', LunchCheckController);
      
      LunchCheckController.$inject= ['$scope'];
      function LunchCheckController($scope){
        $scope.food = "";
        $scope.valueMessage = "";

        $scope.LunchMessage = function(){
            $scope.valueMessage = Message($scope.food);
        };

        function Message(str){
            var count = 0;
            count = str.split(',')
            console.log (count.length);
            if(str == ""){
                return "Please enter data first";
            }
            
            if(count.length <= 3 ){
                return "Enjoy";
            }
            return "To much"
        }
      }
    
    })();