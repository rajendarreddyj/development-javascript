var app = angular.module("articlesApp", []);
app.controller("mainController", function($scope) {
    $scope.articles = [];
    $scope.newArticle={username:'',title:'',timestamp:''};
    
    $scope.post = function(){
      $scope.newArticle.timestamp=Date.now();
      $scope.articles.push($scope.newArticle);
      $scope.newArticle={username:'',title:'',timestamp:''};
    };

});