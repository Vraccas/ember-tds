import DS from 'ember-data';

export default DS.Model.extend({
  _id : DS.attr('string'),
  identity: DS.attr('string'),
});
