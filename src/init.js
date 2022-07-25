$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    /* ======== blinky dancers ======= */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    $(dancer.$node).prepend('<img class = "face" src = asset/' + dancer.face + '>');
    window.dancers.push(dancer.$node);
  });

  $('.addAlignButton').on('click', function(event) {
    let left = 80;
    let top = 0;
    var styleSettings = {
      left: left + 'px',
      top: top + 'px'
    };
    if (window.aligned) {
      window.aligned = false;
    } else {
      window.aligned = true;
    }
    for (var i = 0; i < window.dancers.length; i++) {
      top += 80;
      if ((top + 80) > window.innerHeight) {
        top = 80;
        left += 80;
      }
      styleSettings.top = top + 'px';
      styleSettings.left = left + 'px';
      window.dancers[i].css(styleSettings);
    }
  });

});

