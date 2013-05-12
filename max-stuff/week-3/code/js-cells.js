//	Functions (no arguments):

function white() {
	outlet(0, ["setall", 1.0, 1.0, 1.0]);
	outlet(0, "bang");
}

function black() {
	outlet(0, ["setall", 0.0, 0.0, 0.0]);
	outlet(0, "bang");
}

function topleft() {
	outlet(0, ["setcell", 0, 0, "val", 1.0, 0.0, 0.0]);
	outlet(0, "bang");
}
//	Naive coding:
function corners(r, g, b) {
	outlet(0, ["setcell", 0, 0, "val", r, g, b]);
	outlet(0, ["setcell", 0, 15, "val", r, g, b]);
	outlet(0, ["setcell", 15, 0, "val", r, g, b]);
	outlet(0, ["setcell", 15, 15, "val", r, g, b]);
	outlet(0, "bang");
}

//	Neater:
function setcell(x, y, r, g, b) {
	outlet(0, ["setcell", x, y, "val", r, g, b]);
}

function bang() {
	outlet(0, "bang");
}
	
function kaleida(x, y, r, g, b) {
	setcell(x, y, r, g, b);
	setcell(x, 15 - y, r, g, b);
	setcell(15 - x, y, r, g, b);
	setcell(15 - x, 15 - y, r, g, b);
	bang();
}

post("js-cells");
