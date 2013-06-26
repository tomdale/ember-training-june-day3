/*
  To represent the currently playing song, you will need to define a
  NowPlayingController. After the controller is set up, fill in the template
  you created in Step 10 with HTML.

  If there is no song playing, the panel's HTML should look like this:

      <footer class="now-playing">
        <span class="now-playing-empty">Select a song to start playing.</span>
      </footer>

  If a song is playing, it should look like this:

      <footer class="now-playing">
        <img class="now-playing-artwork" src="<artwork-url>">
        <div class="now-playing-body">
          <p class="now-playing-details">
            <span class="now-playing-name">Rude Boy</span> -
            <span class="now-playing-artist">Rihanna</span>
          </p>
          <div class="now-playing-player">
            <!-- You will fill this in later -->
          </div>
        </div>
      </footer>

  To check if a model is currently set as the now playing song, you can
  use the `model` property with the {{#if}} helper.
*/

step(11, "Render Now Playing Song");

test("Should have a NowPlayingController", function() {
  ok(Ember.ObjectController.detect(App.NowPlayingController), "NowPlayingController is an ObjectController");
});

test("Should display a message if there is no currently selected song", function() {
  setControllerModel('nowPlaying', null);

  shouldHaveElement('.now-playing span.now-playing-empty', "Select a song to start playing.");
});

test("Setting the nowPlaying song should update the nowPlaying template", function() {
  var song = App.Song.create({
    id: "11",
    track: 1,
    name: "A Walk",
    duration: 316,
    album: App.Album.create({
      id: "1",
      artwork: "images/the-morning-after.jpg",
      name: "The Morning After",
      artist: "GOLDHOUSE"
    })
  });

  setControllerModel('nowPlaying', song);

  shouldHaveElement('.now-playing img.now-playing-artwork', { src: 'images/the-morning-after.jpg' });
  shouldHaveElement('.now-playing div.now-playing-body span.now-playing-name', "A Walk");
  shouldHaveElement('.now-playing div.now-playing-body span.now-playing-artist', "GOLDHOUSE");
});
