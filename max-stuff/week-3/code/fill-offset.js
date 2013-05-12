outlets = 3;

function four(x, y) {
	outlet(0, ["offset", x, y]);
	outlet(0, [Math.random(), Math.random(), Math.random(), Math.random()]);
}

function fourRGB(x, y) {
	for (var i = 0; i < 3; i++) {
		outlet(i, ["offset", x, y]);
		outlet(i, [Math.random(), Math.random(), Math.random(), Math.random()]);
	}
}

post("HELLO");
