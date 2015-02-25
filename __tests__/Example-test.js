describe('Example', function() {
  var Example = require('../services/Example');

  describe('Use moment', function() {
    it('should format and log the date', function() {
      Example.useMoment();
    });
  });
});
