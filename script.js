var canvasWidth = 16;
var canvasHeight = 16;
var $options = $("#options-button");
var $reset = $("#reset-button");
var color = "black";

//buildCanvas function creates a grid on pageload as well as when appropriate buttons are clicked.
var buildCanvas = function() {
  for (h = 1; h <= canvasHeight; h++) {
    $("#canvas").append('<div class="row"></div>');
  };
  for (w = 1; w <= canvasWidth; w++) {
    $('.row').append('<div class="unit"></div>');
  };
  $('.unit').css('height', 600 / canvasHeight);
  $('.unit').css('width', 600 / canvasWidth);
};

//colorUnit function
var colorUnit = function(currentColor) {
  $('.unit').on("mouseover", function() {
    $(this).css("background-color", currentColor);
  });
};

$(document).ready(function() {
  buildCanvas();
  colorUnit("black");

  $('#reset-button').on('click', function () {
  	input = prompt('If you would like to change your brush size, please enter a number between 1-100. Otherwise, click "OK" to clear your canvas.', 101 - canvasHeight);
    if (input == null) {
      return;
    }
    else if (isNaN(input) == true || input < 1 || input > 100) {
      alert("You did not enter a number between 1 and 100. Please try again.");
      return;
    }
    else {
      canvasHeight = 101 - input;
    	canvasWidth = canvasHeight;
    	$('.unit').remove();
    	$('.row').remove();
    	buildCanvas();
    	colorUnit("black");
    }
  });

  $('#color-swap-button').on('click', function () {
    if (color == "black") {
    $('#current-color').css("background-color", "white");
    colorUnit("white");
    color = "white";
    }
    else {
    $('#current-color').css("background-color", "black");
    colorUnit("black");
    color = "black";
    }
  });  
});
