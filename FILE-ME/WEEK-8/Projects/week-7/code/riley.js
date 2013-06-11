var WIDTH = 2048;
var HEIGHT = 64;

var theRatio = 2;

var myMatrix = new JitterMatrix(4, "float32", WIDTH, HEIGHT);

function bang() {
	myMatrix.setall(1, 1, 1, 1);
	outlet(0, "jit_matrix", myMatrix.name);
}

function ratio(i) {
	if (i > 0) {
		theRatio = i;
	}
}

function fill(startX, limitX, y, r, g, b) {
	for (var i = startX; i < limitX; i++) {
		myMatrix.setcell(i, y, "val", 0, r, g, b);
		myMatrix.setcell(WIDTH - 1 - i, HEIGHT - 1 - y, "val", 0, r, g, b);
	}
}

function mixColours(colour1, colour2, proportion) {
	var mixedColour = [];
	
	for (var plane = 0; plane < 3; plane++) {
		var c1 = colour1[plane] * (1.0 - proportion);
		var c2 = colour2[plane] * proportion;
		mixedColour[plane] = c1 + c2;
	}

	return mixedColour;
}

function randomColour() {
	var result = [];
	
	for (var plane = 0; plane < 3; plane++) {
		result[plane] = Math.random();
	}
	
	return result;
}

function process(startX, width, y, theseColours, otherColours) {
	var proportion = y / (HEIGHT - 1);

	var toColour   = theseColours.toColour;
	var fromColour = theseColours.fromColour;
	
	var r = mixColours(fromColour, toColour, proportion)[0];
	var g = mixColours(fromColour, toColour, proportion)[1];
	var b = mixColours(fromColour, toColour, proportion)[2];

	if (width > 1) {
		var w8 = 1 + Math.floor(width / theRatio);
		
		fill(startX, startX + w8, y, r, g, b);
	
		process(startX + w8,
				width - w8,
				y,
				otherColours, theseColours);
	} else {
		fill(startX, startX + width, y, r, g, b);
	}
	
	//post("finished process\n");
}

var ODD_COLOURS_1 = { };
var EVEN_COLOURS_1 = { };
var ODD_COLOURS_2 = { };
var EVEN_COLOURS_2 = { };

function randomize() {
	ODD_COLOURS_1.fromColour = randomColour();
	ODD_COLOURS_1.toColour = randomColour();
	ODD_COLOURS_2.fromColour = randomColour();
	ODD_COLOURS_2.toColour = randomColour();
	EVEN_COLOURS_1.fromColour = randomColour();
	EVEN_COLOURS_1.toColour = randomColour();
	EVEN_COLOURS_2.fromColour = randomColour();
	EVEN_COLOURS_2.toColour = randomColour();
}

function riley(proportion) {
	myMatrix.setall(1, 1, 1, 1);
	
	var ODD_COLOURS = {
		fromColour: mixColours(ODD_COLOURS_1.fromColour,
							   ODD_COLOURS_2.fromColour,
							   proportion
							  ),
 		toColour:   mixColours(ODD_COLOURS_1.toColour,
							   ODD_COLOURS_2.toColour,
							   proportion
							  )
	};

	var EVEN_COLOURS = {
		fromColour: mixColours(EVEN_COLOURS_1.fromColour,
							   EVEN_COLOURS_2.fromColour,
							   proportion
							  ),
 		toColour:   mixColours(EVEN_COLOURS_1.toColour,
							   EVEN_COLOURS_2.toColour,
							   proportion
							  )
	}

	for (var y = 0; y < HEIGHT; y++) {
		if (y % 2 == 0) {
			process(0, WIDTH / 2, y, ODD_COLOURS, EVEN_COLOURS);
		} else {
			process(0, WIDTH / 2, y, EVEN_COLOURS, ODD_COLOURS);
		}
	}

	outlet(0, "jit_matrix", myMatrix.name);
}

function test_task() {
	var myTask = new Task(riley);
	myTask.interval = 1000;
	myTask.repeat(10);
}

post("Mixing: " + mixColours([0, 0, 0], [1, 1, 1], 0.3) + "\n");

post("Loaded: " + Date() + "\n");
