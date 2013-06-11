var myMatrix = new JitterMatrix("M", 4, "float32", 128, 1);
var savedFilename = null;

var foo = 3;
var bar = "bar";

function bang() {
	outlet(0, "jit_matrix", myMatrix.name);
}

function photo(filename) {
	myMatrix.importmovie(filename);
	savedFilename = filename;
	bang();
}

function newDimensions(cols, rows) {
	myMatrix.dim = [cols, rows];
	
	if (savedFilename == null) {
		error("No filename!\n");
	} else {
		photo(savedFilename);
	}
}

function loadbang() {
	bang();
}

post("Loaded at: " + Date());
