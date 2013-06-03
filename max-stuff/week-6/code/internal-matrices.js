var myMatrix = new JitterMatrix("MyMatrix", 3, "float32", 128, 1);

//	Remember the photo filename globally since setting the dimensions clears the matrix.

var thePhoto = null;

function bang() {
	outlet(0, "jit_matrix", myMatrix.name);
}

//	First pass: add filename to message but don't add it to the function (!).

function photo(filename) {
	myMatrix.importmovie(filename);
	thePhoto = filename;
	bang();
}

function setDim(x, y) {
	myMatrix.dim = [x, y];
	if (thePhoto) {
		photo(thePhoto);
	}
		
	bang();
}

var colours = [[0, 0, 0], [1, 1, 1]];

//	Could demo with "doBlack = t/f".

function bridget(start, width, colourIndex) {
	var c = colours[colourIndex];
	for (var i = start; i < start + width; i++) {
		myMatrix.setcell(i, 0, c[0], c[1], c[2]);
	}
}

function gonk() {
	bridget(0, 128, 0);
}

post("Loaded at " + Date());
