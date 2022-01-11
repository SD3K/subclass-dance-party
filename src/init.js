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
    var dancerMakerFunctionName = $(this).data('makeBlinkyDancer');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position
    var dancer = new makeBlinkyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    $(dancer.$node).prepend('<img class = "face" src = asset/' + dancer.face + '>');
    window.dancers.push(dancer.$node);
  });

  /* ======== resizing dancers ======= */
  $('.addResizingDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('makeResizingDancer');
    console.log(dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var resizingDancer = new makeResizingDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(resizingDancer.$node);
    $(resizingDancer.$node).prepend('<img class = "face" src = asset/' + resizingDancer.face + '>');
    window.dancers.push(resizingDancer.$node);
  });

  /* ======== sliding dancers ======= */
  $('.addSlidingDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('makeSlidingDancer');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var slidingDancer = new makeSlidingDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(slidingDancer.$node);
    $(slidingDancer.$node).prepend('<img class = "face" src = asset/' + slidingDancer.face + '>');
    window.dancers.push(slidingDancer.$node);
  });

  $('.addMakingALineButton').on('click', function(event) {

  });
});

