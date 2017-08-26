var canvasWidth = 16;
var canvasHeight = 16;

//buildCanvas function creates a grid on pageload as well as when appropriate buttons are clicked.
var buildCanvas = function() {
  for (h = 1; h < canvasHeight; h++) {
    $("#canvas").append('<div class="row"></div>');
  };
  for (w = 1; w < canvasWidth; w++) {
    $('.row').append('<div class="unit"></div>');
  };
  $("#canvas").css("width", (10 * canvasWidth) + "px").css("margin", "0 auto");
};

var colorUnit = function() {
  $('.unit').on("mouseover", function() {
    $(this).css("background-color", "black");
  });
};

$(document).ready(function() {
  buildCanvas();
  colorUnit();
});
