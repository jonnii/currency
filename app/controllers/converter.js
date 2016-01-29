import Ember from 'ember';
import computed, { oneWay, or } from 'ember-computed-decorators';

export default Ember.Controller.extend({
  quantity: 1,
  cost:     2,

  @oneWay('model') currencies,
  @oneWay('currencies.firstObject') defaultCurrency,
  @or('selectedCurrency', 'defaultCurrency') currency,

  @computed('quantity', 'cost')
  amount(quantity, cost) {
    return quantity * cost;
  },

  actions: {
    pay() {
      alert('alerts are ugly');
    }
  }
});
