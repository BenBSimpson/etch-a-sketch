var canvasWidth = 16;
var canvasHeight = 16;
var $options = $("#options-button");
var $reset = $("#reset-button");

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

var colorUnit = function() {
  $('.unit').on("mouseover", function() {
    $(this).css("background-color", "black");
  });
};

$(document).ready(function() {
  buildCanvas();
  colorUnit();
  $('#reset-button').on('click', function() {
  	canvasHeight = prompt('Please enter a canvas size', 'Size');
  	canvasWidth = canvasHeight;
  	$('.unit').remove();
  	$('.row').remove();
  	buildCanvas();
  	colorUnit();
  });

});
