// Controller of dashboard.
appControllers.controller('dashboardCtrl', function ($scope, $timeout, $state,$stateParams, $ionicHistory, $http) {

    //$scope.isAnimated is the variable that use for receive object data from state params.
    //For enable/disable row animation.
    $scope.isAnimated =  $stateParams.isAnimated;

    // navigateTo is for navigate to other page 
    // by using targetPage to be the destination state. 
    // Parameter :  
    // stateNames = target state to go.
	$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                    $http({
                        
                        url: 'http://testurl.com/featured_properties.php',
						
                    }).success(function (response) {
						
                        //console.log(response.failed);
                        //return false;
                        if (response.failed == undefined) {
                            
							$scope.featuredproperties = response.records;
							//alert($scope.featuredproperties);
                        }
                        
                    });

	
	 $scope.options = {
    autoplay: 2500,
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    centeredSlides: true
  }

	 
	 $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                    $http({
                        
                        url: 'http://testurl.com/Get_all_location_list.php',
						
                    }).success(function (response) {
						
                        //console.log(response.failed);
                        //return false;
                        if (response.failed == undefined) {
                            
							$scope.locationlist = response.records;
							//alert($scope.featuredproperties);
                        }
                        
                    });
	
	
	 $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                    $http({
                        
                        url: 'http://testurl.com/property_type_list.php',
						
                    }).success(function (response) {
						
                        //console.log(response.failed);
                        //return false;
                        if (response.failed == undefined) {
                            
							$scope.propertylist = response.records;
							//alert($scope.featuredproperties);
                        }
                        
                    });
	 
	$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                    $http({
                        
                        url: 'http://testurl.com/popular_places.php',
						
                    }).success(function (response) {
						
                        //console.log(response.failed);
                        //return false;
                        if (response.failed == undefined) {
                            
							$scope.places = response.records;
							//alert($scope.featuredproperties);
                        }
                        
                    });

	
	$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                    $http({
                        
                        url: 'http://testurl.com/count_hightlights.php',
						
                    }).success(function (response) {
						
                        //console.log(response.failed);
                        //return false;
                        if (response.failed == undefined) {
                            
							$scope.countofhightlight = response.records;
							//alert($scope.featuredproperties);
                        }
                        
                    });
	
	$scope.propertylistshow = function() {
				
				if ($scope.location == '' ||  $scope.location == undefined) {
                    var location = $scope.location;
                }
				else
				{
					var location = '';
				}	
		
		
				if ($scope.transactiontype == '' ||  $scope.transactiontype == undefined) {
                    var transactiontype = $scope.transactiontype;
                }
				else
				{
					var transactiontype = '';
				}
		
		
				if ($scope.propertytype == '' ||  $scope.propertytype == undefined) {
                    var propertytype = $scope.propertytype;
                }
				else
				{
					var propertytype = '';
				}
		
		
				if ($scope.amountfrom == '' ||  $scope.amountfrom == undefined) {
                    var amountfrom = $scope.amountfrom;
                }
				else
				{
					var amountfrom = '';
				}
				
					
				if ($scope.amountto == '' ||  $scope.amountto == undefined) {
                    var amountto = $scope.amountto;
                }
				else
				{
					var amountto = '';
				}
				
				$state.go("app.propertyList", {'location' : $scope.location, 'transactiontype' : $scope.transactiontype, 'propertytype' : $scope.propertytype, 'amountfrom' : $scope.amountfrom,'amountto' : $scope.amountto, });
				
				
			};
	
	
    $scope.navigateTo = function (stateName) {
        $timeout(function () {
            if ($ionicHistory.currentStateName() != stateName) {
                $ionicHistory.nextViewOptions({
                    disableAnimate: false,
                    disableBack: true
                });
                $state.go(stateName);
            }
        }, ($scope.isAnimated  ? 300 : 0));
    }; // End of navigateTo.

    // goToSetting is for navigate to Dashboard Setting page
    $scope.goToSetting = function () {
        $state.go("app.dashboardSetting");
    };// End goToSetting.

}); // End of dashboard controller.

// Controller of Dashboard Setting.
appControllers.controller('dashboardSettingCtrl', function ($scope, $state,$ionicHistory,$ionicViewSwitcher, $http) {

    // navigateTo is for navigate to other page
    // by using targetPage to be the destination state.
    // Parameter :
    // stateNames = target state to go.
    // objectData = Object data will send to destination state.
	
	$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                    $http({
                        
                        url: 'http://testurl.com/featured_properties.php',
						
                    }).success(function (response) {
						
                        //console.log(response.failed);
                        //return false;
                        if (response.failed == undefined) {
                            
							$scope.featuredproperties = response.records;
							//alert($scope.featuredproperties);
                        }
                        
                    });
	
	
	
	console.log($scope.users);
    $scope.navigateTo = function (stateName,objectData) {
            if ($ionicHistory.currentStateName() != stateName) {
                $ionicHistory.nextViewOptions({
                    disableAnimate: false,
                    disableBack: true
                });

                //Next view animate will display in back direction
                $ionicViewSwitcher.nextDirection('back');

                $state.go(stateName, {
                    isAnimated: objectData,
                });
            }
    }; // End of navigateTo.
}); // End of Dashboard Setting controller.