var makeResizingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.resize = 0;
};

makeResizingDancer.prototype = Object.create(makeDancer.prototype);
makeResizingDancer.prototype.constructor = makeResizingDancer;

makeResizingDancer.prototype.step = function() {
  // this.$node.css('border-radius', '10px');
  makeDancer.prototype.step.call(this);
  this.resize = Math.floor(Math.random() * 10);
  this.$node.css('border', this.resize + 'px solid red');
};