var makeResizingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

makeResizingDancer.prototype = Object.create(makeDancer.prototype);
makeResizingDancer.prototype.constructor = makeResizingDancer;

makeResizingDancer.prototype.step = function() {
  // this.$node.css('border-radius', '10px');
  makeDancer.prototype.step.call(this);
  var resize = Math.floor(Math.random() * 10);
  this.$node.css('border', resize + 'px solid red');
};