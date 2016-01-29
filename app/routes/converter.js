import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      this.store.createRecord('currency', { name: "USD", symbol: "$", rate: 1 }),
      this.store.createRecord('currency', { name: "EUR", symbol: "€", rate: 0.74 }),
      this.store.createRecord('currency', { name: "CNY", symbol: "¥", rate: 6.09 }),
    ]
  }
});
