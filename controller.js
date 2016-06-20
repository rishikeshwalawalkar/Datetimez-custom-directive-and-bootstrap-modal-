var app =  angular.module("my_app",[]);

app.controller("my_controller",function($scope, $http) {
    $http.get("tsconfig.json").success(function (data) {
        $scope.info = data;
    });

    $scope.addFunc = function () {

        document.getElementById("form").style.display = '';

    };

    $scope.add = function () {
        console.log($scope.info);
        var info2 = {
            "ColumnN" :$scope.ColumnN,
            "ColumnT" :$scope.ColumnT,
            "Editable" :$scope.Editable
        };

        $scope.info.push(info2);
            JSON.stringify("tsconfig.json",$scope.info);
    }

    //$scope.checked = [];

    $scope.remove = function(index){
        for(var i in $scope.info){
            if($scope.info[i].ColumnN == index){
                $scope.info.splice(index, 1);
            }
        }

    };

});

app.directive('datetimez', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            element.datetimepicker({
                dateFormat:'dd-MM-yyyy',
                language: 'en',
                pickTime: false,
                startDate: '01-11-2013',
                endDate: '01-11-2030'
            }).on('changeDate', function(e) {
                ngModelCtrl.$setViewValue(e.date);
                scope.$apply();
            });
        }
    };
});

app.controller("my_controller1",function($scope, $http)
{
    $http.get("datanew.json").success(function (data) {
        $scope.info1 = data;
        console.log($scope.info1);
    })
});
