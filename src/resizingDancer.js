var makeResizingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.resize = 0;
};

makeResizingDancer.prototype = Object.create(makeDancer.prototype);
makeResizingDancer.prototype.constructor = makeResizingDancer;

makeResizingDancer.prototype.step = function() {
  // this.$node.css('border-radius', '10px');
  let max = 90;
  let min = 20;
  this.resize = Math.floor(Math.random() * (max - min + 1)) + min;
  makeDancer.prototype.step.call(this);
  this.$node.css('width', this.resize + 'px');
  this.$node.css('height', this.resize + 'px');
};