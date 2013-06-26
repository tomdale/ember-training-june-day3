App.ALBUM_FIXTURES = [{
  id: "1",
  artwork: "images/the-morning-after.jpg",
  name: "The Morning After",
  artist: "GOLDHOUSE",
  songs: [ "11", "12", "13", "14" ]
}, {
  id: "2",
  artwork: "images/dusk-to-dawn.jpg",
  name: "Dusk to Dawn",
  artist: "Emancipator",
  songs: [ "21", "22", "23", "24" ]
}, {
  id: "3",
  artwork: "images/the-heist.jpg",
  name: "The Heist",
  artist: "Macklemore & Ryan Lewis",
  isExplicit: true,
  songs: [ "31", "32", "33", "34" ]
}, {
  id: "4",
  artwork: "images/some-nights.jpg",
  name: "Some Nights",
  artist: "fun.",
  isExplicit: true,
  songs: [ "41", "42", "43", "44" ]
}];

App.SONG_FIXTURES = [{
  id: "11",
  track: 1,
  name: "A Walk",
  duration: 316,
  url: 'audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3',
  album: "1"
}, {
  id: "12",
  track: 2,
  name: "Hours",
  duration: 344,
  url: 'audio/Southern_Nights_-_06_-_Um.mp3',
  album: "1"
}, {
  id: "13",
  track: 3,
  name: "Daydream",
  duration: 334,
  url: 'audio/Southern_Nights_-_08_-_Go_Way.mp3',
  album: "1"
}, {
  id: "14",
  track: 4,
  name: "Dive",
  duration: 499,
  url: 'audio/Southern_Nights_-_09_-_Grass_or_Gasoline.mp3',
  album: "1"
}, {
  id: "21",
  track: 1,
  name: "A Walk",
  duration: 316,
  url: 'audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3',
  album: "2"
}, {
  id: "22",
  track: 2,
  name: "Hours",
  duration: 344,
  url: 'audio/Southern_Nights_-_06_-_Um.mp3',
  album: "2"
}, {
  id: "23",
  track: 3,
  name: "Daydream",
  duration: 334,
  url: 'audio/Southern_Nights_-_08_-_Go_Way.mp3',
  album: "2"
}, {
  id: "24",
  track: 4,
  name: "Dive",
  duration: 499,
  url: 'audio/Southern_Nights_-_09_-_Grass_or_Gasoline.mp3',
  album: "2"
}, {
  id: "31",
  track: 1,
  name: "A Walk",
  duration: 316,
  url: 'audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3',
  album: "3"
}, {
  id: "32",
  track: 2,
  name: "Hours",
  duration: 344,
  url: 'audio/Southern_Nights_-_06_-_Um.mp3',
  album: "3"
}, {
  id: "33",
  track: 3,
  name: "Daydream",
  duration: 334,
  url: 'audio/Southern_Nights_-_08_-_Go_Way.mp3',
  album: "3"
}, {
  id: "34",
  track: 4,
  name: "Dive",
  duration: 499,
  url: 'audio/Southern_Nights_-_09_-_Grass_or_Gasoline.mp3',
  album: "3"
}, {
  id: "41",
  track: 1,
  name: "A Walk",
  duration: 316,
  url: 'audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3',
  album: "4"
}, {
  id: "42",
  track: 2,
  name: "Hours",
  duration: 344,
  url: 'audio/Southern_Nights_-_06_-_Um.mp3',
  album: "4"
}, {
  id: "43",
  track: 3,
  name: "Daydream",
  duration: 334,
  url: 'audio/Southern_Nights_-_08_-_Go_Way.mp3',
  album: "4"
}, {
  id: "44",
  track: 4,
  name: "Dive",
  duration: 499,
  url: 'audio/Southern_Nights_-_09_-_Grass_or_Gasoline.mp3',
  album: "4"
}];

App.ALBUM_FIXTURES.forEach(function(album, index) {
  App.ALBUM_FIXTURES[index] = App.Album.create(album);
});

App.SONG_FIXTURES = App.SONG_FIXTURES.map(function(song) {
  return App.Song.create(song);
});

App.ALBUM_FIXTURES.forEach(function(album) {
  album.songs = album.songs.map(function(id) {
    var song = App.SONG_FIXTURES.findProperty('id', id);
    song.set('album', App.ALBUM_FIXTURES.findProperty('id', song.get('album')));
    return song;
  });
});
