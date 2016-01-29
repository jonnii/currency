import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'currency/tests/helpers/start-app';

module('Acceptance | converter', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /converter', function(assert) {
  // fill out the form
  visit('/converter');
  fillIn('#quantity', '10');
  fillIn('#cost', '5');
  select('#currencies', 'USD');

  // check the results
  andThen(() =>{
    assert.equal(find('.results .USD').text(), '$50.00');
    assert.equal(find('.results .EUR').text(), '€37.00');
    assert.equal(find('.results .CNY').text(), '¥304.50');
  });
});
