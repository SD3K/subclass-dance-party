var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  let max = 10;
  let min = -10;
  this.top += Math.floor(Math.random() * (max - min + 1)) + min;
  this.left += Math.floor(Math.random() * (max - min + 1)) + min;
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

