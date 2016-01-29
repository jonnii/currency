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
  visit('/converter');

  andThen(function() {
    assert.equal(currentURL(), '/converter');
  });
});
