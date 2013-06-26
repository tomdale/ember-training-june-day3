/*
  In Step 10, you'll create the bottom bar that displays the
  currently playing song. Later, it will display the information
  about the currently playing song, as well as hold the controls for
  pausing, playing and seeking through a song.

  Create a new template called `nowPlaying` and display it in the
  application template using the `render` Handlebars helper.

  For now, ensure that the `nowPlaying` template has a `footer`
  element with the class `now-playing`.
*/

step(10, "Show Now Playing Bar");

test("currentSong template should have a footer element", function() {
  ok(typeof Ember.TEMPLATES.nowPlaying === 'function', "nowPlaying template is defined");
  shouldHaveElement('footer.now-playing');
});
