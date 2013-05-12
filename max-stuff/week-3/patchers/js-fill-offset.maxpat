{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 6,
			"minor" : 1,
			"revision" : 3,
			"architecture" : "x86"
		}
,
		"rect" : [ 43.0, 357.0, 640.0, 480.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Anonymous Pro",
		"gridonopen" : 0,
		"gridsize" : [ 15.0, 5.0 ],
		"gridsnaponopen" : 0,
		"statusbarvisible" : 0,
		"toolbarvisible" : 1,
		"boxanimatetime" : 200,
		"imprint" : 0,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"boxes" : [ 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-11",
					"maxclass" : "number",
					"maximum" : 15,
					"minimum" : 0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 360.0, 25.0, 50.0, 18.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-12",
					"maxclass" : "number",
					"maximum" : 15,
					"minimum" : 0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 300.0, 25.0, 50.0, 18.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-13",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 255.0, 60.0, 109.0, 18.0 ],
					"text" : "pak fourRGB 0 0"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-10",
					"maxclass" : "number",
					"maximum" : 15,
					"minimum" : 0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 180.0, 25.0, 50.0, 18.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-9",
					"maxclass" : "number",
					"maximum" : 15,
					"minimum" : 0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 120.0, 25.0, 50.0, 18.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 75.0, 60.0, 89.0, 18.0 ],
					"text" : "pak four 0 0"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 75.0, 95.0, 122.0, 18.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fill-offset.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fill-offset.js"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 285.0, 150.0, 96.0, 18.0 ],
					"text" : "jit.fill M4 2"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 180.0, 150.0, 96.0, 18.0 ],
					"text" : "jit.fill M4 1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 75.0, 150.0, 96.0, 18.0 ],
					"text" : "jit.fill M4 0"
				}

			}
, 			{
				"box" : 				{
					"border" : 1.0,
					"id" : "obj-26",
					"maxclass" : "jit.pwindow",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 75.0, 215.0, 165.0, 165.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Anonymous Pro",
					"fontsize" : 12.0,
					"id" : "obj-27",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "jit_matrix", "" ],
					"patching_rect" : [ 75.0, 185.0, 201.0, 18.0 ],
					"text" : "jit.matrix M4 3 float32 16 16"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-1", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-26", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "fill-offset.js",
				"bootpath" : "/Users/nick/GITHUB/cassiel/rave-dataviz/max-stuff/week-3/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
 ]
	}

}
