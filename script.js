// Tic Tac Toe
jQuery(document).ready(function ($) {
  //assign current player
  var player1 = "x";
  var player2= "o";
  var currentPlayer = player1;
  var squareId = 0;
  
  var win = [
  				[0,1,2],
  				[3,4,5],
  				[6,7,8],
  				[2,4,6],
  				[0,4,8]
  			];
  
  var useTurn  = function(currentPlayer,squareId){
    var square = $("#"+squareId);
    square.append(currentPlayer);
    square.removeClass("clean");
  };
  
  var switchTurn = function(){
  	if (currentPlayer === player1){
  		currentPlayer = player2;
  	} else {
  		currentPlayer = player1;
  	}
  };
  
  var checkWinner = function(currentPlayer){
  	
  	jQuery.each(win, function(line){
  		var wincount = 0;
  		jQuery.each(function(cell,cellnumber){
  		
  			if ($('#' + cellnumber).html() == "currentPlayer"){
  				wincount++;
  			}
  		});
  		if (wincount == 3) {
  			console.log("winner: "+currentPlayer);
  		}
  		
  	});
  	
  	$('.gameboard').children('div').each(function () {
    //alert(this.value); // "this" is the current element in the loop
  	});

  };
  
  $('.clean').click(function() {
  		console.log("square class:" + $(this).attr('class'));
  		if ($(this).html() == ""){
			console.log("currentPlayer: " + currentPlayer);
			squareId = $(this).attr('id');
			useTurn(currentPlayer, squareId);
			switchTurn();
			checkWinner(currentPlayer);
	  		//checkEnd();
	  	}
  	});
  	
  // play again button
  $('.play-again').click(function() {
	$('.gameboard').children('div').each(function () {
  		$(this).html("");  	
	});
	currentPlayer = player1;
  });
  
});