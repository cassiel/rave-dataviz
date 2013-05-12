//	These API details are all under Vignettes in the online documentation.

//	Iterative form.

function allButtonsColourXXX(r, g, b) {
	var p = this.patcher;
	
	for (var obj = p.firstobject; obj != null; obj = obj.nextobject) {
//		post(obj, obj.maxclass, obj.varname);
//		post();
		
		if (obj.maxclass == "button") {
			obj.fgcolor(r, g, b, 1.0);
		}
	}
}

//	Better (when there's no cumulative state):

function allButtonsColour(r, g, b) {
	var p = this.patcher;
	
	function f(obj) {
		if (obj.maxclass == "button") {
			obj.fgcolor(r, g, b, 1.0);
		}
	}
	
	//p.apply(f);

	//	Doing the full lambda thing.
	p.applyif(function (obj) { obj.fgcolor(r, g, b, 1.0); },
			  function (obj) { return (obj.maxclass == "button"); });
}

//	In this example, dx and dy act as velocities, since they're applied
//	at each input. Exercise: make a proper shift-from-original-position
//	function. (Store initial positions.)

function shiftButtons(dx, dy) {
	var p = this.patcher;
	
	for (var obj = p.firstobject; obj != null; obj = obj.nextobject) {
		post(obj, obj.maxclass, obj.varname);
		post();
		
		if (obj.maxclass == "button") {
			r = obj.rect;		//	left, top, right, bottom
			r[0] = r[0] + dx;
			r[1] = r[1] + dy;
			r[2] = r[2] + dx;
			r[3] = r[3] + dy;
			obj.rect = r;
		}
	}
}

allButtonsColour(1, 1, 1);

//	A bit of object creation:

function create() {
	var p = this.patcher;

	var msg = p.newdefault(100, 100, "message");
	msg.set(Date());
	
	var r = msg.rect;
	r[2] = r[2] + 100;
	msg.rect = r;
	
	var printer = p.newdefault(100, 150, "print", "@popup", 1);
	
	p.connect(msg, 0, printer, 0);
}

post("DONE", Date());
post();
