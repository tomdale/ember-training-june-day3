/**
  In Step 6, you will apply the knowledge that you have learned
  so far to build the list of songs.

  To make the tests pass, you will need to create a template that
  produces the following HTML for the song list.

    <div class="album-info">
      <img src="artwork.png">
      <h1>Album Name</h1>
      <h2>Artist Name</h2>
    </div>

    <table class="album-listing">
      <!-- this should repeat once for each song -->
      <tr>
        <td class="song-track">
          <span class="track-number"><!-- track number --></span>
        </td>
        <td class="song-name"><!-- song name --></td>
        <td class="song-duration"><!-- song duration --></td>
      </tr>
      <!-- end repeat -->
      <tr>
        <td class="total-duration" colspan="3">Total Time: 40:03</td>
      </tr>
    </table>

  You can hardcode the total duration for now. We will update
  it with a calculated value in a later step.
*/

step(6, "Songs List");

test("Information about the album is displayed", function() {
  click('.album:first a');

  shouldHaveElement('.album-info img', { src: 'images/the-morning-after.jpg' });
  shouldHaveElement('.album-info h1', "The Morning After");
  shouldHaveElement('.album-info h2', "GOLDHOUSE");
});

test("It should have a list of songs", function() {
  click('.album:first a');

  ["1", "2", "3", "4"].forEach(function(track, row) {
    shouldHaveElement('.album-listing td.song-track', track, "The track number '" + track + "' should be displayed in the first cell in row " + (row + 1));
  });

  ["A Walk", "Hours", "Daydream", "Dive"].forEach(function(song, row) {
    shouldHaveElement('.album-listing td.song-name', song, "The song name '" + song + "' should be displayed in the second cell in row " + (row + 1));
  });

  shouldHaveElements('.album-listing td.song-duration', 4, "The duration information for four tracks should be displayed in the last cell");
});
