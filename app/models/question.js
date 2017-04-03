import DS from 'ember-data';

export default DS.Model.extend({
	author: DS.attr(),
	description: DS.attr(),
	qtn: DS.attr(),
	answers: DS.hasMany('answer', {async: true})
});
