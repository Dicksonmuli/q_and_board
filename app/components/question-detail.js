import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		delete(question){
			if(confirm('Are you sure you want to delete this Question?')){
				this.sendAction('destroyQtn', question);
			}
		},
		deleteAnswer(answer){
			this.sendAction('destroyAnswer', answer);
		}
	}
});
