// @barge suite="User Signup" framework="casperjs" args="--ssl-protocol=any"
var url = "https://loadimpact.com";

casper.test.begin('Can register from marketing site', function(test) {
  casper.start(url, function() {
    test.assertTitle('On Demand Load Testing for Developers & Testers | Load Impact', 'page Title');
    this.click('a.trial-button');
  });

  casper.then(function() {
    test.assertUrlMatch(/\/account\/register$/, 'Move to App');
  });

  casper.run(function() {
    test.done();
  });
});
