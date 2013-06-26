/*
  In Step 17, you will highlight the currently playing song with a yellow
  background. This will make it easy for your users to spot at a glance
  where in the album they are.

  To make this work, you'll need to create a new controller for each of
  the songs in the album list. You can do this easily using the {{#each}}
  helper's itemController option.

  It works like this:

      {{#each people itemController="person"}}
        {{firstName}} {{lastName}}
      {{/each}}

  Now, for each Person model in the list, an App.PersonController
  instance is created, and its model property is set to the associated
  model.

  In your app, you'll want to make an App.SongController that has a
  computed property that determines if song model it represents is the
  currently playing song.

  Then, in your album template, use bindAttr to bind the tr element's
  class to the computed property you just defined. When the song is
  the currently playing song, the tr should get the class name
  "is-playing".
*/

step(17, "Highlight Current Song");

test("When a song is playing, it becomes highlighted", function() {
  click('.album:first a');
  click('td.song-track:first .play');

  shouldHaveElement('tr.is-playing', "A Walk", "tr element for currently playing song has the class name is-playing");

  click('td.song-track:eq(1) .play');
  shouldHaveElement('tr.is-playing', "Hours", "tr element for currently playing song has the class name is-playing");
  shouldHaveElements('tr.is-playing', 1);
});

