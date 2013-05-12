inlets = 1;
outlets = 3;

var DIM = 16;
var LEN = DIM * DIM;

function white_A() {
	var a = new Array(LEN);

	for (var i = 0; i < LEN; i++) {
    	a[i] = 1.0;
	}

	for (var out = 0; out < 3; out++) {
    	outlet(out, a);
	}
}
	
function white_B() {
	var b = [];

	for (var i = 0; i < LEN; i++) {
    	b.push(1.0);
	}

	for (var out = 0; out < 3; out++) {
    	outlet(out, b);
	}
}

function rand_grey() {
	var a = new Array(LEN);
	
	for (var i = 0; i < a.length; i++) {
		a[i] = Math.random();
	}

	for (var out = 0; out < 3; out++) {
    	outlet(out, a);
	}
}

function rand_colour() {
	var a = new Array(LEN);
	
	for (var out = 0; out < 3; out++) {
		for (var i = 0; i < a.length; i++) {
			a[i] = Math.random();
		}

    	outlet(out, a);
	}
}

function alt() {
	var a = new Array(LEN);

	for (var i = 0; i < LEN; i++) {
		var x = i % DIM;
		var y = Math.floor(i / DIM);
    	a[i] = ((x + y) % 2 == 1) ? 1.0 : 0.0;
	}

	for (var out = 0; out < 3; out++) {
    	outlet(out, a);
	}
}

function fade(cx, cy) {
	var a = new Array(LEN);

	for (var i = 0; i < LEN; i++) {
		var x = i % DIM;
		var y = Math.floor(i / DIM);
		
		var distance = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
		
		
    	a[i] = Math.max(0, distance / DIM);
	}

	for (var out = 0; out < 3; out++) {
    	outlet(out, a);
	}
	
	
}

//	Global array:

var g_Array = [];
for (var i = 0; i < LEN; i++) { g_Array.push(i / LEN); }
	
function flushit() {
	for (var out = 0; out < 3; out++) {
    	outlet(out, g_Array);
	}
}

function reverseit() {
	g_Array.reverse();
	flushit();
}

function rotateit() {
	var x = g_Array.shift();
	g_Array.push(x);
	flushit();
}


white_A();

post("HELLO\n");
