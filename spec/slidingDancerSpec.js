describe('slidingDancer', function() {

  var slidingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidingDancer = new makeSlidingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slidingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node slide', function() {
    sinon.spy(slidingDancer, 'step');
    let top = slidingDancer.top;
    let left = slidingDancer.left;
    expect(slidingDancer.top).to.be.equal(top);
    expect(slidingDancer.left).to.be.equal(left);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    expect(slidingDancer.top).to.not.equal(top);
    expect(slidingDancer.left).to.not.equal(left);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slidingDancer, 'step');
      expect(slidingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slidingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slidingDancer.step.callCount).to.be.equal(2);
    });
  });


});