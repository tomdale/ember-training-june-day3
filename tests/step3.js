/*
  For Step 3, use the `{{#if}}` helper to only show an "EXPLICIT" warning
  about the album if the model's `isExplicit` property is true.

  Your template should generate HTML that looks like this:

    <div class="album">
      <a href="/album/1">
        <img src="images/1.jpg">
      </a>

      <p class="album-name">The Morning After</p>
      <p class="artist-name">GOLDHOUSE</p>
      <p class="song-count">
        8 songs
        <span class='explicit'>EXPLICIT</span>
      </p>
    </div>

  The span with the class name `explicit` should only appear for albums
  whose `isExplicit` property is true.
*/

step(3, "Add Explicit Warning");

test("Explicit albums should have a warning about their contents", function() {
  shouldHaveElement('p.album-name:contains("The Morning After") ~ p.song-count:not(:has(span.explicit))', undefined, "First album should not be explicit");
  shouldHaveElement('p.album-name:contains("Dusk to Dawn") ~ p.song-count:not(:has(span.explicit))', undefined, "Second album should not be explicit");
  shouldHaveElement('p.album-name:contains("The Heist") ~ p.song-count span.explicit', "EXPLICIT", "Third album should be explicit");
  shouldHaveElement('p.album-name:contains("Some Nights") ~ p.song-count span.explicit', "EXPLICIT", "Fourth album should be explicit");
});
