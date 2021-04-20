(function () {
'use strict';

angular.module('MenuCategoriesApp', [])
.controller('MenuCategoriesController', MenuCategoriesController)
.service('InfoService', InfoService)
.directive('listItemSnnipet', ListItemSnnipet);

function ListItemSnnipet(){
	var ddo = {
		templateUrl: 'listIemSnnipet.html'
	};
	return ddo;
}

MenuCategoriesController.$inject = ['$scope', 'InfoService'];
function MenuCategoriesController($scope, InfoService) {
	var buscador = this;
	$scope.color = "green";
	$scope.alerta = false;
	var promise = InfoService.getItems();

	promise.then(function (response) {
    buscador.categories = response.data;
    //console.log(buscador.categories.menu_items);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  	//console.log(buscador.categories.menu_items);
	//$scope.color= promise;
	buscador.buscar = function(){
		buscador.categories1 = [];
		buscador.categories1.length = 0;
		//buscador.categories1 = buscador.categories;
		//console.log(buscador.categories.menu_items.length);
		//buscador.categories1.push(buscador.categories.menu_items[6]);
		//console.log(buscador.categories1);
		//console.log($scope.busqueda);
		for (var i = 0; i< buscador.categories.menu_items.length; i++ ){
			if ( ($scope.busqueda != undefined && $scope.busqueda != "") && buscador.categories.menu_items[i].description.includes($scope.busqueda.toLowerCase())){
				buscador.categories1.push(buscador.categories.menu_items[i]);
			}
		}
		//console.log(buscador.categories.menu_items[3].description.includes($scope.busqueda.toLowerCase()));
		if (buscador.categories1.length < 1 && ($scope.busqueda == "" || $scope.busqueda == undefined || $scope.busqueda != null)){
			$scope.alerta = true;// $scope.busqueda != undefined
		}else{
			$scope.alerta = false;
		}
	}
	buscador.delete = function(i){
		//console.log(i);
		//console.log(buscador.categories1[i]);
		buscador.categories1.splice(i,1);

	}
}

InfoService.$inject = ['$http'];
function InfoService($http){
	var info = this;
	info.getItems = function(){
		var response = $http({
       		method: "GET",
       		url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      		});
		//var response = "red";
		//console.log(response);
		return response;
	}
}

})();