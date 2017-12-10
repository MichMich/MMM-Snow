/* Magic Mirror
 * Module: MMM-Snow
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("MMM-Snow",{

	defaults: {
		flakeCount: 100
	},

	getStyles: function() {
		return [ "MMM-Snow.css" ]
	},

	getDom: function() {
		var wrapper = document.createElement("div")
		wrapper.className = "snow-wrapper"

		var flake, jiggle, size;

		for(var i = 0; i < this.config.flakeCount; i++) {

			size = (Math.random() * 0.75) + 0.25;
			flakeImage = document.createElement("div")
			flakeImage.className = "flake" + (Math.round(Math.random() * 2) + 1);
			flakeImage.style.transform = "scale(" + size +", "+size+")";
			flakeImage.style.opacity = size;

			flake = document.createElement("div");
			flake.className = "snow-flake";

			jiggle = document.createElement("div");
			jiggle.style.animationDelay = (Math.random() * 4) + "s";
			jiggle.style.animationDuration = ((Math.random() * 30) + 30) + "s";
			jiggle.appendChild(flakeImage);

			size = (Math.random() * 0.75) + 0.25;
			jiggle.style.transform = "scale(" + size +", "+size+")";
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
