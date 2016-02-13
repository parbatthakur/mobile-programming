function jsonFlickrFeed(data) {// jsonFlickrFeed is already defined function for the flick api.
	console.log(data);

	var output = '';

	/* flickr api returns a object with items key in it which is an array of 20 elements. This
	 loop is initialized so that we can iterate over each item and display it as we want  */

	for (var i = 0; i < data.items.length; i++) {

		var title = data.items[i].title;
		// assign title fromt the items, to the variable title.

		/* in items there is media and in media there is 'm' key which value is the link to the image.
		 substring function is used because we don't want the image in default size so we are cutting out the last few characters from the link */

		var link = data.items[i].media.m.substring(0, 58);

		/* blocktype variable defines the column for images coming from the flickr
		 modulus operator here checks if the remainder is equal to 2 or 1 or neither 2 or 1.  (i%3) this nicely lays out the 3 columns for the images.*/

		var blocktype = ((i % 3) === 2) ? 'c' : ((i % 3) === 1) ? 'b' : 'a';
		output += '<div class = "ui-block-' + blocktype + '">';

		/*https://www.flickr.com/services/api/misc.urls.html*     in this url you can find about defining the image sizes*/

		output += '<img src = " ' + link + '_c.jpg" alt ="' + title + '"/>';
		// we deleted _m.jpg from the image link and add _c.jpg
		output += '</div>';

	}

	$('#photoslist').html(output);
	// outputs the photoslist

}
