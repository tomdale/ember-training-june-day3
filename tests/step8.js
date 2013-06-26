/*
 In Step 8, we'll wrap each of the fixture POJOs (plain old JavaScript objects)
 in Ember objects.

 First, define the classes `App.Album` and `App.Song`. We will use these
 classes to create individual model instances of our fixture data.

 Next, modify the code in `fixtures.js` to create instances of `App.Album`
 and `App.Song` for each record in the fixture data.
*/

step(8, "Ember Objects");

test("App.Song and App.Album have been defined", function() {
  ok(Ember.Object.detect(App.Album), "App.Album is an Ember.Object subclass");
  ok(Ember.Object.detect(App.Song), "App.Song is an Ember.Object subclass");
});

test("Album fixtures have been converted into models", function() {
  App.ALBUM_FIXTURES.forEach(function(album) {
    ok(App.Album.detectInstance(album), "album is an instance of App.Album");
  });

  App.SONG_FIXTURES.forEach(function(album) {
    ok(App.Song.detectInstance(album), "song is an instance of App.Song");
  });

  var firstAlbum = App.ALBUM_FIXTURES[0];
  equal(firstAlbum.get('id'), 1);
  equal(firstAlbum.get('artwork'), "images/the-morning-after.jpg");
  equal(firstAlbum.get('name'), "The Morning After");
  equal(firstAlbum.get('artist'), "GOLDHOUSE");

  var firstSong = App.SONG_FIXTURES[0];
  strictEqual(firstAlbum.get('songs.firstObject'), firstSong);
  strictEqual(firstSong.get('album'), firstAlbum);
});
