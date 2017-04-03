import Ember from 'ember';

export default Ember.Component.extend({
	newAnswerForm: false,
//display form and save answer actions
	actions: {
		newAnswer(){
			this.set('newAnswerForm', true);

		},
		saveAnswer(){
			var params = {
				author: this.get('author'),
				content: this.get('content')
			};
			this.set('newAnswerForm', false);
			this.sendAction('saveAnswer', params);
		}
	}
});
