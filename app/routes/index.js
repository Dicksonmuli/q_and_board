//import Ember
import Ember from 'ember';

//for class to be used in other components and templetes.
export default Ember.Route.extend({
	model(){
		return Ember.RSVP.hash({
			questions: this.store.findAll('question'),
			answers: this.store.findAll('answer'),
});
},
actions: {
	saveQtn(params){
		var newQuestion =  this.store.createRecord('question', params);
		newQuestion.save();
		this.transitionTo('index');
	}
}
});
