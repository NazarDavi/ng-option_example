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

	$scope.request.volary = $scope.volaries[0];
	$scope.request.cage = $scope.volaries[0].cages[0];

	$scope.setDefaultCage = function() {
		angular.forEach($scope.request.volary.cages, function(cage) {	// Сейчас в request находится вольер, клетки которого нужно отобразить
			if (cage.is_default) {
				$scope.request.cage = cage;								// Перебираем все клетки этого вольера и записываем в модель клетку по умолчанию, это избавит от пустого option во втором select
			}
		});
	};
});
