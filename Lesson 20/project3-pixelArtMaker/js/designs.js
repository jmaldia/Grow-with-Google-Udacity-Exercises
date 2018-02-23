
// When size is submitted by the user, call makeGrid()
// Listener for the submit button
	// $(submit).on('click', function() {
	// 	// Task: grab input (color, width, height) from user and 
	// });



function makeGrid(inputWidth, inputHeight) {
	// Your code goes here!
	event.preventDefault();
	// This function creates a grid based on the Height and Width inputs
	var table = "";

	for (var row = 0; row < inputHeight; row++) {
		$('.row').remove();
		table += "<tr class='row'>";
		for (var column = 0; column < inputWidth; column++) {
			if (column % 2 === 0 && row % 2 == 1) {
				table += "<td class='grey'></td>";
			} else if (column % 2 === 1 && row % 2 == 0) {
				table += "<td class='grey'></td>";
			} else {
				table += "<td></td>";
			}
		}
		table += "</tr>";
	}
	$('#pixelCanvas').append(table);
}

function reset(gridWidth, gridHeight) {
	makeGrid(gridWidth, gridHeight);
}

$(document).ready(function() {
	// Select color input
	// Select size input
	var gridHeight = 30;//$(inputHeight);
	var gridWidth = 30;//$(inputWidth);
	var gridColor = "#000000";

	// Create initial grid
	reset(gridWidth, gridHeight);

	// This grabs the width and height from the user and replaces the existing grid
	$('#button').on('click', function() {
    	event.preventDefault();

		gridWidth = $("#sizePicker").find("input[name='width']").val();
		gridHeight = $("#sizePicker").find("input[name='height']").val();

		var confirmDelete = confirm('Do you really want to clear your beautiful work?');
		if (confirmDelete) {
	    	makeGrid(gridWidth, gridHeight);	
		}
	});

	$('#colorPicker').on('change', function() {
		gridColor = $(this).val();
	});

	// Uses event delegation so that all grey classes (even ones created after the DOM loads) are affected
	$('#pixelCanvas').on('mouseenter', 'td', function() {
		$('td').css({'background-color': gridColor});
	});

});


/*
Features
Must have:
X Grid maker 
X - Color picker
- Ability to draw
Nice to have:
- Reset button
- Customized color picker
- Erase option
- Clear grid
- Preset sizes
- Save option
*/


