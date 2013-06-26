/*
  For Step 7, you will create a new helper called `format-duration` that
  takes a number of seconds and turns it into a MM:SS formatted string.

  For example, 75 seconds would become "1:15".

  You will need to handle several edge-cases, such as when the number of
  seconds is less than 10. The tests below cover all of the edge-cases
  you need to worry about.

  Here is the algorithm you should implement to satisfy the unit tests
  below:

  1. Divide the number of seconds by 60, and floor the result using Math.floor().
     This is the number of whole minutes.
  2. Get the remaining number of seconds by using the remainder (`%`) operator.
  3. If the remainder is less than 10, construct the formatted seconds by
     prepending a "0" to it. Otherwise, the formatted seconds is just the
     remainder.
  4. The formatted string is the number of minutes, followed by a ":", followed
     by the formatted seconds.
  5. Return the formatted string.

  If you are enterprising, you might try alternative strategies.

  Once all of your unit tests are passing, update the `album` template to use
  the `format-duration` helper to format the duration of each song. This should
  make the integration tests pass.
*/

step(7, "Add a Helper");

test("The helper correctly formats number of seconds into human-readable strings", function() {
  equal(invokeHelper('format-duration', 0), '0:00', "0 is converted into 0:00");
  equal(invokeHelper('format-duration', 8), '0:08', "Less than 10 seconds gets 0-padded");
  equal(invokeHelper('format-duration', 20), '0:20', "Numbers with trailing zeros are not truncated");
  equal(invokeHelper('format-duration', 60), '1:00', "Exactly 60 seconds is converted into 1:00");
  equal(invokeHelper('format-duration', 61), '1:01', "Less than 10 seconds into a minute gets 0-padded");
  equal(invokeHelper('format-duration', 70), '1:10', "Numbers with trailing zeros greater than one minute are not truncated");
  equal(invokeHelper('format-duration', 125), '2:05', "The helper works with multiple minutes");
});

test("Each album formats the duration in seconds as MM:SS", function() {
  click('.album:first a');

  [ '5:16', '5:44', '5:34', '8:19' ].forEach(function(duration) {
    shouldHaveElement('.album-listing .song-duration', duration);
  });
});
