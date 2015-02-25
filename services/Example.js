var Moment = require('moment');

var Example = {
  useMoment: function() {
    var date = new Moment();
    console.log(date.format('YYYY-MM-DD'));
  }
};

module.exports = Example;
