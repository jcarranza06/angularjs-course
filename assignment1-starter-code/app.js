(function (){
    'use strict';
    
   angular.module('verItems',[])
   .controller('controller1', function($scope){
       $scope.stringItems = "";
       $scope.verifyItems = function(stringItems){
            if ($scope.stringItems ===""){
                $scope.print="Please enter data first"
                $scope.color="red"
            } else{ let cont = 0;
                    $scope.color="green"
                    for (let c=0; c<$scope.stringItems.length; c++){
                        if ($scope.stringItems.charAt(c)==","){
                            cont++
                        }
                    }
                    if (cont < 3 ) {
                        $scope.print="Enjoy!"
                    }else {
                        $scope.print="Too much!"
                    }
                    
            };
            
       };
   });

})();