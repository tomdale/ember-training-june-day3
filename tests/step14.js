/*
  In Step 14, you will flesh out the audio player that you
  stubbed out in Step 13.

  Your audio player will wrap the HTML5 <audio> element, and propagate
  any changes to it to the component. This allows it to participate in
  Ember's bindings and observers, and makes it super easy to make UIs
  that stay up-to-date.

  The first step is to use jQuery to add event listeners to
  the audio tag that you added to the `components/audio-player` template.

  You can do so in your component's didInsertElement hook, which
  is called once the template has been rendered and put
  into the DOM. For a reference of the audio tag's events,
  see: https://developer.mozilla.org/en-US/docs/DOM/Media_events

  When the audio has loaded, it should set the component's
  `duration` property to the length of the currently loaded
  song. Use Math.floor() to round to the nearest second.

  You should also set the `isLoaded` property to true.

  Make sure that you add an `autoplay` attribute to the audio tag to ensure
  that it starts playing as soon as its `src` attribute changes.

  As the audio file plays, you should update the component's
  `currentTime` property to the current position in the
  audio track. Again, you should use `Math.floor()` to
  round to the nearest second.

  Finally, when the audio tag starts playing, the component's
  `isPlaying` property should be set to true.
*/

step(14, "The Audio Tag Goes to 11");

testComponent('audioPlayer', "currentTime has an initial value", function(component) {
  equal(component.get('currentTime'), 0, "The component's currentTime starts at 0");
});

testComponent('audioPlayer', "once the <audio> tag has loaded, the component's duration and isLoaded properties are set", function(component) {
  Ember.run(function() {
    component.set('src', "audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3");
  });

  propertyShouldBecome(component, 'duration', 219);
  propertyShouldBecome(component, 'isLoaded', true);
});

testComponent('audioPlayer', "when the time has updated, the currentTime property is updated", function(component) {
  Ember.run(function() {
    component.set('src', "audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3");
  });

  propertyShouldBecome(component, 'currentTime', function(value) {
    // the value is a non-zero integer
    return typeof value === 'number' && value !== 0 && value % 1 === 0;
  });
});

testComponent('audioPlayer', "when the audio tag starts playing, the component's isPlaying property becomes true", function(component) {
  Ember.run(function() {
    component.set('src', "audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3");
  });

  propertyShouldBecome(component, 'isPlaying', true);
});
