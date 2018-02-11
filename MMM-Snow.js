/* Magic Mirror
 * Module: MMM-Snow
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 * 
 * Comment on terminology: a 'flake' is any moving item being shown on the mirror, while
 * the specific themed items are called 'snow' or 'heart'. This applies to variable names
 * file names and css class names.
 */

Module.register("MMM-Snow",{

	defaults: {
		flakeCount: 100,
		theme: "winter"                 // pick from themes map below, i.e. winter, love
	},

	themes: {
		"winter" : { 
			"flakePrefix"  : "snow",    // prefix of css name, e.g. snow1 
			"imagesCount"  : 3,         // number of images available in this theme, here:  snow1, snow2, snow3
			"downwards"    : true,      // direction of flake movements, snow goes downwards
			"sizeFactor"   : 1},        // adapt size of flakes to your liking, use original flake size
		"love"   : { 
			"flakePrefix" : "heart",    // prefix of css name, e.g. heart1 
			"imagesCount"  : 2,         // number of images in this theme, here:  heart1, heart2
			"downwards"    : false,     // direction of flake movements, hearts raise upwards			
			"sizeFactor"   : 2},        // adapt size of flakes to your liking, we like bigger hearts
		"water"   : { 
			"flakePrefix" : "bubble",   // prefix of css name, e.g. bubble1 
			"imagesCount"  : 1,         // number of images in this theme, here:  bubble1
			"downwards"    : false,     // direction of flake movements, bubbles raise upwards			
			"sizeFactor"   : 2}         // adapt size of flakes to your liking, we like bigger bubbles
	},

	getStyles: function() {
		return [ "MMM-Snow.css" ]
	},

	getDom: function() {
		var themeSettings = this.themes[this.config.theme];
		var wrapper = document.createElement("div")
		wrapper.className = "wrapper"

		var flake, jiggle, size;

		for(var i = 0; i < this.config.flakeCount; i++) {

			size = themeSettings.sizeFactor * (Math.random() * 0.75) + 0.25;
			flakeImage = document.createElement("div")
			
			var flakeSuffix = Math.round(1 + Math.random() * (themeSettings.imagesCount - 1));
			flakeImage.className = themeSettings.flakePrefix + flakeSuffix;
			flakeImage.style.transform = "scale(" + size +", " + size + ")";
			flakeImage.style.opacity = size;

			flake = document.createElement("div");
			if(themeSettings.downwards) {
				flake.className = "flake-downwards";
			}
			else {
				flake.className = "flake-upwards"
			}

			jiggle = document.createElement("div");
			jiggle.style.animationDelay = (Math.random() * 4) + "s";
			jiggle.style.animationDuration = ((Math.random() * 30) + 30) + "s";
			jiggle.appendChild(flakeImage);

			size = (Math.random() * 0.75) + 0.25;
			jiggle.style.transform = "scale(" + size +", " + size + ")";
			jiggle.style.opacity = size;

			flake.appendChild(jiggle);
			flake.style.left = ((Math.random() * 100) - 10) + "%";
			flake.style.animationDelay = (Math.random() * 100) + "s";
			flake.style.animationDuration = 100 - (Math.random() * 50 * size) + "s";

			wrapper.appendChild(flake);
		}
		return wrapper;
	}

});
