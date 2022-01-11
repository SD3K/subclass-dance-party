describe('resizingDancer', function() {

  var resizingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    resizingDancer = new makeResizingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(resizingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its size change', function() {
    sinon.spy(resizingDancer.$node, 'toggle');
    var size = resizingDancer.resize;
    clock.tick(timeBetweenSteps);
    expect(resizingDancer.resize).to.not.equal(size);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(resizingDancer, 'step');
      expect(resizingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(resizingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(resizingDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('resizing', function() {
    it('should change the size', function() {
      sinon.spy(resizingDancer, 'step');
      expect(resizingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(resizingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(resizingDancer.step.callCount).to.be.equal(2);
    });
  });


});
