/*
  In Step 15, you will add some user interface to the App.AudioPlayerComponent.

  First, create two buttons in the `components/audio-player' template. One
  should play, and the other should pause. Tell the action helper to send the
  event to the component instead of the current controller.

  The play button should only be visible when the component's isPlaying
  property is false. The pause button should be visible when it is
  true. Use a conditional to show only one at a time.

  When the pause button is clicked, the audio should be paused. If
  the play button is clicked, the audio should start playing.

  You may want to use the following Unicode characters for your buttons:

    * Play - ▶
    * Pause - ❙❙

   The play and pause buttons that you create should look like the following HTML

     <button class="pause">❙❙</button>
     <button class="play">▶</button>

   The `testComponent` test helper will create a component in isolation and
   exercise it. In order for your component to work in isolation, it must use
   its `src` property as the value of the audio tag's `src` attribute.
*/

step(15, "Play and Pause Buttons");

testComponent('audioPlayer', "the component starts off with a play button", function(component) {
  componentShouldHaveElement(component, 'button.play', undefined, "The component should contain a play button");
  componentShouldHaveElement(component, 'button', 1, "The component should only have a single button at a time");
});

testComponent('audioPlayer', "once the component's src is set, the play button changes to a pause button", function(component) {
  Ember.run(function() {
    component.set('src', "audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3");
  });

  waitFor(component, 'isPlaying').then(function() {
    componentShouldHaveElement(component, 'button.pause', undefined, "The component should contain a pause button");
    componentShouldHaveElement(component, 'button', 1, "The component should only have a single button at a time");

    equal(component.$('audio').prop('paused'), false, "The <audio> tag automatically starts playing when a src is set");
  });
});

testComponent('audioPlayer', "if the pause button is clicked, the control pauses the audio", function(component) {
  Ember.run(function() {
    component.set('src', "audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3");
  });

  waitFor(component, 'isPlaying').then(function() {
    click('button.pause', component);
    return waitFor(component, 'isPlaying');
  }).then(function() {
    equal(component.get('isPlaying'), false, "The component's isPlaying property becomes false");
    equal(component.$('audio').prop('paused'), true, "When the pause button is pressed, the <audio> tag pauses");
  });
});

testComponent('audioPlayer', "if the pause button is clicked, and then the play button is clicked, the control plays the audio", function(component) {
  Ember.run(function() {
    component.set('src', "audio/Southern_Nights_-_07_-_All_My_Sorrows.mp3");
  });

  waitFor(component, 'isPlaying').then(function() {
    click('button.pause', component);
    return waitFor(component, 'isPlaying');
  }).then(function() {
    click('button.play', component);
    return waitFor(component, 'isPlaying');
  }).then(function() {
    equal(component.get('isPlaying'), true, "The component's isPlaying property becomes true again");
    equal(component.$('audio').prop('paused'), false, "When the play button is pressed, the <audio> tag plays");
  });
});
