import DS from 'ember-data';
import { attr } from "ember-computed-decorators/ember-data";

export default DS.Model.extend({
  @attr name,
  @attr rate,
  @attr symbol
});
