// Select color input
// Select size input
var gridHeight = 3;//$(inputHeight);
var gridWidth = 3;//$(inputWidth);
var gridColor = "#000000";
// When size is submitted by the user, call makeGrid()
// Listener for the submit button
	// $(submit).on('click', function() {
	// 	// Task: grab input (color, width, height) from user and 
	// });

gridColor = $("#colorPicker").click( function() {
	this.val();
});

console.log(gridColor);


function makeGrid(inputWidth, inputHeight) {

// Your code goes here!
	event.preventDefault();
	// This function creates a grid based on the Height and Width inputs
	var table = "";

	for (var row = 0; row < inputHeight; row++) {
		$('.row').remove();
		table += "<tr class='row'>";
		for (var column = 0; column < inputWidth; column++) {
			table += "<td></td>";
		}
		table += "</tr>";
	}
	console.log(table);
	$('#pixelCanvas').append(table);
}

$('#button').click( function() {

    event.preventDefault();

	gridWidth = $("#sizePicker").find("input[name='width']").val();
	gridHeight = $("#sizePicker").find("input[name='height']").val();
    makeGrid(gridWidth, gridHeight);
    console.log(gridWidth);
});

