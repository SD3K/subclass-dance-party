var ResizingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.resize = 0;
};

ResizingDancer.prototype = Object.create(Dancer.prototype);
ResizingDancer.prototype.constructor = ResizingDancer;

ResizingDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.animate({width: 'toggle'}, 350);

  this.$node.mouseenter(function(event) {
    $(this).css('transform', 'rotate(270deg)');
  });

  this.$node.mouseleave(function(event) {
    $(this).css('transform', 'rotate(0deg)');
  });

};