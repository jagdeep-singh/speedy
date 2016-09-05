angular.module('colorGame').factory('commonServices', [
  '$ionicPopup',
  function($ionicPopup){

    function createMatrix(size){
      var matrix = new Array(size);
      for(var index =0; index < matrix.length; index++){
        var innerArr = new Array(size);
        for(var j=0; j< innerArr.length; j++){
          innerArr[j] = {value : false};
        }
        matrix[index] = innerArr;
      }
      console.log(matrix);
      return matrix;
    }

    function colorItemsRandomly(matrix, count){
      for(var i=0; i<count; i++){
        colorSingleIndex(matrix);
      }

      function colorSingleIndex(matrix){
        var rand1 = parseInt(Math.random()*(matrix.length));
        var rand2 = parseInt(Math.random()*(matrix.length));
        if(!matrix[rand1][rand2].value){
          matrix[rand1][rand2].value = true;
        }
        else{
          colorSingleIndex(matrix)
        }
      }
    }

    function isAllItemsUnColored(matrix){
      var isUnColored = true;
      matrix.forEach(function (itemObj) {
        itemObj.forEach(function (item) {
          if(item.value){
            isUnColored = false;
          }
        });
      });
      return isUnColored;
    }

    function startTimeOut(time, matrix, callback){
      var timeout = setTimeout(function () {
        if(callback){
          callback(matrix);
        }
        clearTimeout(timeout);
      }, time);

      return timeout;
    }

    function getRemainingColoredItems(matrix){
        var coloredItems = 0;
        matrix.forEach(function (itemObj) {
          itemObj.forEach(function (item) {
            if(item.value){
              coloredItems++;
            }
          });
        });
        return coloredItems;
    }

    function showAlertBox(title, text, callback){
      $ionicPopup.alert({
        title: title,
        template: text
      }).then(function () {
          if(callback)
            callback();
      });
    }

    function showConfirmBox(title, text, successCallback, failureCallback){
      $ionicPopup.confirm({
        title: title,
        template: text
      }).then(function(res) {
        if(res && successCallback) {
          successCallback();
        } else {
          if(failureCallback)
            failureCallback();
        }
      });
    }

    return {
      createMatrix : createMatrix,
      colorItemsRandomly : colorItemsRandomly,
      isAllItemsUnColored : isAllItemsUnColored,
      startTimeOut : startTimeOut,
      getRemainingColoredItems : getRemainingColoredItems,
      showAlertBox : showAlertBox,
      showConfirmBox : showConfirmBox
    }
  }
]);
