/**
  Up until now, you've been putting all of your HTML in the
  application template. However, as you just learned, creating
  an app that supports multiple pages requires at least one outlet.

  To get the tests for Step 4 passing, you'll need to make a few
  structural changes.

  1) Move all of the album-specific HTML out of the application
     template and into a new `index` template.
  2) Create a resource for `/album/:album_id` that renders a new
     `album` template. For now, just make sure that it contains
     a `div` with the `album-info` class.
  3) You will need to make sure that each template has the
     correct model provided by its route.

  Remember that you can use `findProperty` to find the album
  with a given `id` (You can see emberjs.com/guides/enumerables
  for more information).
*/
step(4, "Add Resource");

test("When navigating to /album/1, the album with ID of 1 is displayed", function() {
  navigateTo('/album/1', function() {
    shouldHaveElement('div.album-info');
  });
});
