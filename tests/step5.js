/*
  In Step 5, you'll create a link from the album list to an individual
  album.

  Go to the index template and wrap the image with the album artwork inside a
  {{#linkTo}} helper. Make sure to pass a parameter to the helper; this tells
  the helper which model should go into the URL.
*/

step(5, "Add a Link");

test("Each album on the index page should have a link to the album page", function() {
  [ 1, 2, 3, 4 ].forEach(function(id) {
    shouldHaveElement('.album a', { href: '#/album/' + id });
  });
});

test("Clicking on an album shows the album template", function() {
  click('.album:first a');

  shouldHaveElement('.album-info');
});
