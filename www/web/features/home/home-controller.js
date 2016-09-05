angular.module('colorGame').controller('colorGame.features.homeController',[
  '$scope',
  '$state',
  '$stateParams',
  '$ionicPopup',
  'commonServices',
  function ($scope, $state, $stateParams, $ionicPopup, commonServices) {
      console.log($stateParams);
      $scope.levelObj = Object.assign({}, $stateParams.levelObj);

      $scope.chancesArr = [];
      $scope.onChangeCallback = function () {
        if(commonServices.getRemainingColoredItems($scope.matrix) == 0){
          clearTimeout($scope.timeoutRefrence);
          onComplete($scope.matrix);
        }
      };

      startGame($scope.levelObj.gridSize, $scope.levelObj.coloredItems, $scope.levelObj.time);

      function startGame(matrixSize, itemsToColor, timeToComplete){
        $scope.matrix = commonServices.createMatrix(matrixSize);
        $scope.remainingTime = timeToComplete;
        commonServices.colorItemsRandomly($scope.matrix, itemsToColor);
        $scope.timeoutRefrence = commonServices.startTimeOut(timeToComplete, $scope.matrix, onTimeOver);
        startTimeInterval(timeToComplete);
      }

      function onTimeOver(matrix){
          if(commonServices.isAllItemsUnColored(matrix)){
            onComplete(matrix);
          }
          else {
            onUnComplete(matrix);
          }
      }

      function onUnComplete(matrix){
          var remainingItems = commonServices.getRemainingColoredItems(matrix);
          $scope.chancesArr.push({
            status : 'incomplete',
            time : $scope.levelObj.time,
            remainingItems : remainingItems
          });

          if($scope.chancesArr.length >= $scope.levelObj.chances){
              commonServices.showAlertBox("Out of chances", "You can try another level.", function () {
                $state.go('menu');
              });
              return;
          }

          commonServices.showConfirmBox('Time Out!!', 'Wanna try another chance.', function () {
            startGame($scope.levelObj.gridSize, $scope.levelObj.coloredItems, $scope.levelObj.time);
          }, function () {
            $state.go('menu');
          });
      }

      function onComplete(matrix){
        if(($scope.levelObj.gridSize*$scope.levelObj.gridSize) == $scope.levelObj.coloredItems){
          commonServices.showAlertBox("Awesome!!", "You are an expert. Try another level.", function () {
            $state.go('menu');
          });
          return;
        }

        commonServices.showConfirmBox('Congrats!!', 'You did it. Do you wanna more complex.', function () {
          $scope.levelObj.coloredItems++;
          startGame($scope.levelObj.gridSize, $scope.levelObj.coloredItems, $scope.levelObj.time);
        }, function () {
          $state.go('menu');
        });
      }

      function startTimeInterval(time){
          var timeInterval = setInterval(function () {
            time -= 1000;
            if(time == 0){
              clearInterval(timeInterval);
            }
            $scope.remainingTime = time;
            $scope.$apply();
          }, 1000);
      }
  }
]);
