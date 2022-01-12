var SlidingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function() {
  if (!window.aligned) {
    Dancer.prototype.step.call(this);
    let max = 10;
    let min = -10;
    this.top += Math.floor(Math.random() * (max - min + 1)) + min;
    // keep the dancer on the screen
    while (this.top < 90 || this.top > window.innerHeight - 90) {
      this.top += Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.left += Math.floor(Math.random() * (max - min + 1)) + min;
    // keep the dancer on the screen
    while (this.left < 90 || this.left > window.innerWidth - 90) {
      this.left += Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.animate(styleSettings);
  }

  this.$node.mouseenter(function(event) {
    $(this).css('transform', 'rotate(270deg)');
    // $(this).animate({'-moz-transform': 'rotate(90deg)'}, 350);
  });

  this.$node.mouseleave(function(event) {
    $(this).css('transform', 'rotate(0deg)');
  });
};

