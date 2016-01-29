import Ember from 'ember';

export function convert(params/*, hash*/) {
  let amount = params[0];
  let toRate = params[1];
  let fromRate = params[2];

  var converted = amount * toRate / fromRate;
  return converted.toFixed(2);
}

export default Ember.Helper.helper(convert);
