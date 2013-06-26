/*
  In Step 18, you will add a song queue to BümBöx.

  First, add a button to the right side of the song rows:

      <button class="queue">Queue</button>

  Then, implement the action to queue the song onto your NowPlayingController.
  Use a property called `nextSongs` to store the queued songs.

  After that, add a "show queue" button to the footer:

      <button class="show-queue">Show queue</button>

  The "show queue" button should toggle the display of the queue modal. The HTML
  for the queue modal can live at the bottom of the nowPlaying template. We've
  added some CSS for the modal that you can use by using a div with ID "queue".
  You can reuse the DOM structure from the album's song list.

  You should also make any tweaks necessary to ensure the play button also works
  from inside the queue modal.
*/

step(18, "Song Queue");

test("there is a queue button inside the song list", function() {
  click('.album:first a');

  shouldHaveElement('.album-listing tr:first button.queue', "Queue", "There is a queue button");
});

test("clicking the queue button adds the song to the queue", function() {
  click('.album:first a');
  click('.album-listing tr:first .queue');

  var nowPlayingController = controllerFor('nowPlaying');
  equal(nowPlayingController.get('nextSongs.length'), 1, "There is a song in the queue");
});

test("there is a button to show the queue in the footer", function() {
  shouldHaveElement('footer button', "Show queue", "There is a show queue button");
});

test("when clicking the show queue button the queue is displayed", function() {
  click('.album:first a');
  click('.album-listing tr:first .queue');
  click('footer button:contains(Show queue)');

  shouldHaveElement('#queue', undefined, "The queue is showing");
  shouldHaveElement('#queue .album-listing tr', "A Walk", "The queue is showing");

  click('button:contains(Show queue)'); // Hide the queue
});

test("clicking the play button inside queue should work", function() {
  click('.album:first a');
  click('.album-listing tr:first .queue');
  click('footer button:contains(Show queue)');
  click('#queue tr:first .play');

  shouldHaveElement('footer', "A Walk", "The queued song is playing");

  click('button:contains(Show queue)'); // Hide the queue
});
