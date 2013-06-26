/*
  In Step 2, use the {{bindAttr}} helper to display the album artwork
  for each album.
*/

step(2, "Add Artwork");

test("Each album should have an image with its src attribute bound to the model's artwork property", function() {
  // [src^=http] means that the 'src' attribute must begin with http
  shouldHaveElements('.album img[src^="images/"]', 4);

  var images = [
    "images/the-morning-after.jpg",
    "images/dusk-to-dawn.jpg",
    "images/the-heist.jpg",
    "images/some-nights.jpg"
  ];

  images.forEach(function(image) {
    shouldHaveElement('.album img', { src: image }, "Image should have src bound to " + image);
  });
});
