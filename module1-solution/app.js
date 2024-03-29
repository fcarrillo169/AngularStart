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

        /*$scope.LunchMessage = function(){

            //Enjoy
            //To much


        }*/

        function Message(str){
            var count = 0;
            if(str == ""){
                return "Please enter data first";
            }
            count = str.split(',')
            console.log ('valor de count ' + count);
            return "Sin evaluacui&oacute;n"
        }


      }
    
    })();