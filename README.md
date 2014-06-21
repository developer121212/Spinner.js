Spinner.js
==========

Add a loader to your HTML page element

Usage
-----

Initialize the plugin on the element that should wrap the loader

    $(document).ready(function(){
    	$('body').spinner();
    });

Configuration
-------------

Default configuration options are:

	var config = {
	    backdrop_color : 'rgba(248, 248, 248, 0.80)', // backdrop color
	    loader : null, // Path to the loader image
	    start : true  // autostart when initializes
	}

Methods
-------

*   Start : `$('body').spinner('start');`
*   Stop  : `$('body').spinner('stop');`





