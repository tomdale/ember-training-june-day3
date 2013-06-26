/*
  In Step 13, you'll lay the foundation for our upcoming `audio-player`
  component.

  Because our component is named `audio-player`, the first step is to create
  a template named `components/audio-player`.

  Also, define an `Ember.Component` subclass named `App.AudioPlayerComponent`.
  This class will allow you to add JavaScript behavior to the dynamic tag.
  The component should have the class "audio-control".

  Once that's done, use the newly-created `{{audio-player}}` tag to put the
  audio component in the `nowPlaying` template, inside the "now-playing-player"
  <div> that we had previously left empty.

  For now, just put a placeholder <audio> tag inside the
  `components/audio-player` template. We'll make it work in the next step.
*/

step(13, "Add an Audio Component");

test("App.AudioPlayerComponent is defined", function() {
  ok(App.AudioPlayerComponent, "App.AudioPlayerComponent is defined");
  ok(Ember.Component.detect(App.AudioPlayerComponent), "App.AudioPlayerComponent is a subclass of Ember.Component");
});

test("The audio player is rendered into the now playing template", function() {
  click('.album:first a');
  click('td.song-track:first .play');

  shouldHaveElement('.now-playing-player .ember-view.audio-control', undefined, "App.AudioView has the audio-control class name");

  shouldBeView('.now-playing-player .ember-view.audio-control');
});

test("Component template is defined", function() {
  click('.album:first a');
  click('td.song-track:first .play');

  shouldHaveTemplate('components/audio-player');
  shouldHaveElement('.audio-control audio');
});
