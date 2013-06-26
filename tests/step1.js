/*
  In Step 1, you are going to load some models from fixture data in the
  router.

  Then, you'll use the {{#each}} helper that you learned about to print
  each of the albums using a template.

  You will find the fixture data in `js/fixtures.js`, which populates
  the `App.ALBUM_FIXTURES` property with an array of albums.

  Create a route handler for the application template, and make sure you set
  its model to the list of albums.

  Delete all but one of the static albums in the application template.

  Finally, use the {{#each}} helper to display the remaining HTML once per album
  in the application. Use Handlebars expressions to print the album's name
  and artist. (Don't worry about the album artwork or song count for now.)
*/

step(1, "List Albums");

test("The album list is enclosed in a <div> with the class 'album-list'", function() {
  shouldHaveElement('div.album-list', null, "The album list is a <div class='album-list'>");
});

test("Each of the four albums should appear on the screen", function() {
  shouldHaveElements('.album-list .album', 4, "There should be four albums in the list");

  [ 'The Morning After', 'Dusk to Dawn', 'The Heist', 'Some Nights' ].forEach(function(name) {
    shouldHaveElement('.album p.album-name', name, "There should be an album whose album name is " + name);
  });

  [ 'GOLDHOUSE', 'Emancipator', 'Macklemore & Ryan Lewis', 'fun.' ].forEach(function(name) {
    shouldHaveElement('.album p.album-artist', name, "There should be an album whose artist name is " + name);
  });
});
