import Ember from 'ember';

export default Ember.Component.extend({
	ratingForm: false,
//display form and save answer actions
	actions: {
		newRating(){
			this.set('ratingForm', true);

		},
		saveRating(){
			var params = {
				rating: parseInt(this.get('rating'))
			};
			this.set('ratingForm', false);
			this.sendAction('saveRating', params);
		}
	}
});
