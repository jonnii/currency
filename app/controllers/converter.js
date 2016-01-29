import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
  currencies: {
    "USD": 1,
    "EUR": 0.74,
    "CNY": 6.09
  },

  quantity: 1,
  cost: 2,
  selectedCurrency: "EUR",

  @computed('selectedCurrency', 'currencies')
  selectedRate(selectedCurrency, currencies) {
    return currencies[selectedCurrency];
  },

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
