outlets = 3;

function grey() {
	outlet(0, [0.5, 0.5, 0.5, 0.5]);
	outlet(1, [0.5, 0.5, 0.5, 0.5]);
	outlet(2, [0.5, 0.5, 0.5, 0.5]);
}

function complete() {
	var lots_of_numbers = [];
	
	for (var plane = 0; plane < 3; plane++) {
		lots_of_numbers = [];
		
		for ( var i = 0; i < 256; i = i + 1 ) {
			lots_of_numbers.push(Math.random());
		}

		outlet(plane, lots_of_numbers);
	}
}

function chessboard(oddColour, evenColour) {
	for (var plane = 0; plane < 3; plane++) {
		//	New pattern for each of the three planes:
		var lots_of_numbers = [];
	
		for (var i = 0; i < 256; i++) {
			var x = i % 16;
			var y = Math.floor(i / 16);

			if ((x + y) % 2 == 0) {
				lots_of_numbers.push(evenColour[plane]);
			} else {
				lots_of_numbers.push(oddColour[plane]);
			}
		}
		
		outlet(plane, lots_of_numbers);
	}
}

function graded_chessboard(oddColour1, evenColour1,
						   oddColour2, evenColour2) {

	for (var plane = 0; plane < 3; plane++) {
		//	New pattern for each of the three planes:
		var lots_of_numbers = [];
	
		for (var i = 0; i < 256; i++) {
			var x = i % 16;
			var y = Math.floor(i / 16);

			var proportion = (i / 255.0);

			if ((x + y) % 2 == 0) {
				var c1 = evenColour1[plane] * (1.0 - proportion);
				var c2 = evenColour2[plane] * proportion;
				lots_of_numbers.push(c1 + c2);
			} else {
				var c1 = oddColour1[plane] * (1.0 - proportion);
				var c2 = oddColour2[plane] * proportion;
				lots_of_numbers.push(c1 + c2);
			}
		}
		
		outlet(plane, lots_of_numbers);
	}
}

function bw_chessboard() {
	chessboard([0.0, 0.0, 0.0], [1.0, 1.0, 1.0]);
}

function wood_chessboard() {
}

function redblue_chessboard() {
	chessboard([1.0, 0.0, 0.0], [0.0, 0.0, 1.0]);
}

function swatch_input(r1, g1, b1, a1,
					  r2, g2, b2, a2,
					  r3, g3, b3, a3,
					  r4, g4, b4, a4) {
	graded_chessboard([r1, g1, b1],
					  [r2, g2, b2],
					  [r3, g3, b3],
					  [r4, g4, b4]);
}

function xxchessboard() {
	for (var plane = 0; plane < 3; plane++) {
		//	New pattern for each of the three planes:
		var lots_of_numbers = [];
	
		for (var i = 0; i < 256; i++) {
			var x = i % 16;
			var y = Math.floor(i / 16);

			if ((x + y) % 2 == 0) {
				if (plane == 0) {
					lots_of_numbers.push(1.0);
				} else {
					lots_of_numbers.push(0.0);
				}
			} else {
				if (plane == 2) {
					lots_of_numbers.push(1.0);
				} else {
					lots_of_numbers.push(0.0);
				}
			}
		}
		
		outlet(plane, lots_of_numbers);
	}
}

post("Hello World");
post();
