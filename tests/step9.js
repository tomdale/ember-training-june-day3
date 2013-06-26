/*
  In Step 9, you will add a total duration for an album.

  If you look at the listing for an album, you'll see that each song
  has a duration in seconds. We'd like to automatically compute the
  duration of an album by summing the duration of each of its songs.

  You'll do this using a computed property on the Album subclass you defined in
  Step 8.

  To make sure that the computed property updates appropriately,
  you'll need to define its dependent key. Make sure you understand the
  @each dependent key.
*/

step(9, "Total Duration");

function makeSong(options) {
  return Ember.Object.create(options);
}

test("An Album correctly calculates totalDuration", function() {
  var album = App.Album.create();

  var songs = [
    App.Song.create({ duration: 10 }),
    App.Song.create({ duration: 120 }),
    App.Song.create({ duration: 234 })
  ];

  album.set('songs', songs);
  equal(album.get('totalDuration'), 364, "total duration is the sum of the songs' durations");

  songs.pushObject(App.Song.create({
    duration: 25
  }));

  equal(album.get('totalDuration'), 389, "total duration is updated when a new song is added");

  songs[0].set('duration', 20);
  equal(album.get('totalDuration'), 399, "total duration is updated when a song's duration is changed");

  songs.popObject();
  equal(album.get('totalDuration'), 374, "total duration is updated when a song is removed");
});

test("The total duration is displayed", function() {
  click('.album:first a');

  shouldHaveElement('.album-listing .total-duration', "24:53");
});
