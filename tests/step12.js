/*
  In Step 12, you will wire up the song list so that when the user clicks on
  the play button, the song is displayed in the Now Playing Bar.

  You will need to use the {{action}} helper to implement a "Play" button
  for each song. It should send an event to the AlbumRoute to tell
  it to update the NowPlaying controller's model, which will update the
  footer.

  You should update the HTML rendered for each song in the album template
  to include a span with class "play":

      <td class="song-track">
        <span class="track-number">1</span>
        <span class="play">▶</span>
      </td>

   The action helper should be added to this new span. Make sure you pass
   the song you want to play as an argument.
*/

step(12, "Play Action");

test("Should enclose the track number in a span with the class track-number", function() {
  click('.album:first a');

  shouldHaveElements('td.song-track span.track-number', 4);
  shouldHaveElements('td.song-track span.play', 4);
});

test("Clicking a song's play button shows it in the now playing template", function() {
  click('.album:first a');
  click('td.song-track:first .play');

  shouldHaveElement('.now-playing img.now-playing-artwork', { src: 'images/the-morning-after.jpg' });
  shouldHaveElement('.now-playing div.now-playing-body span.now-playing-name', "A Walk");
  shouldHaveElement('.now-playing div.now-playing-body span.now-playing-artist', "GOLDHOUSE");
});
