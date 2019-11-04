var miControlador = miModulo.controller(
    "homeController",
<<<<<<< HEAD
    ['$scope', '$http', function ($scope, $http) {
        $scope.sitio='homeController';
    }]
)
=======
    ['$scope', '$http', 'auth',
        function ($scope, $http, auth) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;

            $scope.controller = "homeController";
        }
    ]
)
>>>>>>> 975d4bf1fdb7269e66c8da11c72a0e9805fc08e1
