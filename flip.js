var coinFlipApp = angular.module('coinFlipApp', []);
coinFlipApp.controller('headsOrTailsController', function($scope){
	$scope.test = "testing";
	
	// the user clicked on heads - ng-click = "heads()" in the view
	$scope.heads = function(){
		console.log("Test heads");
		$scope.userGuess = "heads";
		var flipResult = flip();
		$scope.guess = true;
		if(flipResult.coinFlipResult == 'heads'){
			$scope.message = "You won!";
		}else{
			$scope.message = "You lost.";
		}
		$scope.coin = flipResult.coinImg;
	}

	// the user clicked on tails - ng-click="tails()" in the view
	$scope.tails = function(){
		console.log("Test tails");
		$scope.userGuess = "tails";
		var flipResult = flip();
		$scope.guess = true;
		if(flipResult.coinFlipResult == 'tails'){
			$scope.message = "You won!";
		}else{
			$scope.message = "You lost.";
		}
		$scope.coin = flipResult.coinImg;
	}

	// the user clicked on playGame - ng-click="playGame()" in the view
	$scope.playGame = function(){
		console.log("Test play");
		$scope.guess = false;
		$scope.message = null;
	}

	var flip = function(){
		var rand = Math.random();
		var flipResult = {
			coinImg: null,
			coinFlipResult: null,
			message: null
		}

		if(rand > .5){
			flipResult.coinImg = "flip-images/quarter-front.png";
			flipResult.coinFlipResult = "heads";
		}else{
			flipResult.coinImg = "flip-images/quarter-back.png";
			flipResult.coinFlipResult = "tails";
		}
		return flipResult;
	}

});