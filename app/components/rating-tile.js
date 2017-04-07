import Ember from 'ember';

export default Ember.Component.extend({
	// actions
	actions: {
		this.sendAction('saveRating', params);
	}
});
