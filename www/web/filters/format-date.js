(function () {
  angular.module("whatsUp").filter('formatDate', [
    function () {
      return function(input, type) {
        if(!input)
          return input;
        if(type == 'date')
          return moment(input).format('MMMM Do YYYY');
        else if(type == 'time')
          return moment(input).format('HH:mm');
        else
          return moment(input).format('MMMM Do YYYY HH:mm');
      };
    }
  ]);
})();
