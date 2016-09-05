angular.module('colorGame').controller('colorGame.features.menuController',[
  '$scope',
  '$state',
  'commonServices',
  function ($scope, $state, commonServices) {
    $scope.menuObj = {};

    $scope.onPlayClick = function (obj) {
      console.log(obj);
      if(!$scope.menuObj.selectedLevelObj){
        commonServices.showAlertBox("Validation !!", "Please select level.");
        return;
      }
      $state.go('home', {levelObj : obj});
    };

    $scope.levelsList = [
      {
        levelName : "Breezy",
        levelId : 1,
        gridSize : 2,
        coloredItems : 2,
        chances : 3,
        time : 2000
      },
      {
        levelName : "Easy",
        levelId : 2,
        gridSize : 3,
        coloredItems : 4,
        chances : 3,
        time : 2000
      },
      {
        levelName : "Medium",
        levelId : 3,
        gridSize : 4,
        coloredItems : 6,
        chances : 3,
        time : 3000
      },
      {
        levelName : "Hard",
        levelId : 4,
        gridSize : 5,
        coloredItems : 7,
        chances : 3,
        time : 4000
      },
      {
        levelName : "Expert",
        levelId : 5,
        gridSize : 6,
        coloredItems : 8,
        chances : 3,
        time : 5000
      }
    ];
  }
]);
