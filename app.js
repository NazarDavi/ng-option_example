var app = angular.module('example', []);

app.controller('exampleController', function($scope) {
	$scope.request = {};

	$scope.volaries = [
		{
			'volary_id': 1,
			'text': 'Южный вольер',
			'is_default': 1,
			'cages': [
						{
							'cage_id': 1,
							'text': 'Питон Python',
							'is_default': 1,
							'volary_id': 1
						},
						{
							'cage_id': 2,
							'text': 'Слоненок Дамбо',
							'is_default': 0,
							'volary_id': 1
						}
					]
		},
		{
			'volary_id': 2,
			'text': 'Северный вольер',
			'is_default': 0,
			'cages': [
					{
						'cage_id': 3,
						'text': 'Белый медведь Умка',
						'is_default': 1,
						'volary_id': 2
					},
					{
						'cage_id': 4,
						'text': 'Морж Котан',
						'is_default': 0,
						'volary_id': 2
					}
				]
		},
	];

	$scope.cages = [];

	angular.forEach($scope.volaries, function(volary) {
		angular.forEach(volary.cages, function(cage) {
			if (cage.volary_id = volary.volary_id) {
				$scope.cages.push(cage);				//Собираем массив всех клеток
			}
		});
	});

	$scope.initVolary = function() {					//Если ранее вольер был выбран модель инициализируется этим значением, иначе - значением по умолчанию
		var init;										//Для того, чтобы был выбран соответствующий option возвращается значение init

		if ($scope.request.volary_id) {
			init = $scope.request.volary_id;
		} else {
			angular.forEach($scope.volaries, function(volary) {
				if (volary.is_default === 1) {
					init = volary.volary_id;
					$scope.request.volary_id = volary.volary_id;
				}
			});
		}

		return init;
	};

	$scope.initCage = function() {						//Если ранее была выбрана клетка модель инициализируется этим значением, иначе - значением по умолчанию
		var init;										//Для того, чтобы был выбран соответствующий option возвращается значение init

		if ($scope.request.cage_id) {
			init = $scope.request.cage_id;
		} else {
			angular.forEach($scope.cages, function(cage) {
				if (cage.is_default === 1 && cage.volary_id === $scope.request.volary_id) {
					init = cage.cage_id;
					$scope.request.cage_id = cage.cage_id;
				}
			});
		}

		return init;
	};
});
