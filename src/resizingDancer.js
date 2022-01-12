var ResizingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.resize = 0;
};

ResizingDancer.prototype = Object.create(Dancer.prototype);
ResizingDancer.prototype.constructor = ResizingDancer;

ResizingDancer.prototype.step = function() {
  // this.$node.css('border-radius', '10px');
  // let max = 90;
  // let min = 20;
  // this.resize = Math.floor(Math.random() * (max - min + 1)) + min;
  // Dancer.prototype.step.call(this);
  // this.$node.css('width', this.resize + 'px');
  // this.$node.css('height', this.resize + 'px');
  Dancer.prototype.step.call(this);
  this.$node.animate({width: 'toggle'}, 350);

  this.$node.mouseenter(function(event) {
    $(this).css('transform', 'rotate(270deg)');
    // $(this).animate({'-moz-transform': 'rotate(90deg)'}, 350);
  });

  this.$node.mouseleave(function(event) {
    $(this).css('transform', 'rotate(0deg)');
  });

};