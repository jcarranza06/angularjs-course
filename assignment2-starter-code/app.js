(function (){
    'use strict';
    
    var objetos = [
  {
    name: "Galleta",
    quantity: "15"
  },
  {
    name: "Leche",
    quantity: "3"
  },
  {
    name: "Salchicha",
    quantity: "7"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Huevos",
    quantity: "15"
  },
  {
    name: "Bolsas",
    quantity: "100"
  },
  {
    name: "Parlantes",
    quantity: "2"
  },
  {
    name: "Botellas",
    quantity: "9"
  },
  {
    name: "Salchicha",
    quantity: "4"
  }
];
	var comprado=[];
   angular.module('listasDeCompra',[])
   .controller('controlDeImpresion', imprimircompra);
   

   function imprimircompra($scope) 
   	{
       $scope.stringItems = "";

       $scope.objetos = objetos;
       $scope.comprado=comprado;
       $scope.color="red";
       this.perro=1;
       $scope.objetos1=$scope.objetos.length;

       $scope.checked = function(valor){
       		$scope.comprado.push($scope.objetos[valor])
       		$scope.objetos.splice(valor, 1);

       }

   }
  	
  
})();