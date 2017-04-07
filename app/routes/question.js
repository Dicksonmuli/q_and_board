import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('question', params.question_id);
	},
	// actions
	actions: {
		//to save the new answer
		saveAnswer(params){
			var newAnswer = this.store.createRecord('answer', params);
			var question = params.question;
			question.get('answers').addObject(newAnswer);
			newAnswer.save().then(function () {
				return question.save();
			});
			this.transitionTo('question', question);
		},
		

		// to destroy an answer in a certain question
		destroyAnswer(answer){
			answer.destroyRecord();
			this.transitionTo('index');
		},
		//to destroy a specific question
		destroyQtn(question){
			var answer_delete = question.get('answers').map(function (answer) {
				return answer.deleteRecord();
			});
			Ember.RSVP.all(answer_delete).then(function () {
				return question.deleteRecord();
			});
			this.transitionTo('index');
		},
		//to update the question
		update(question, params){
			Object.keys(params).forEach(function (key) {
				if(params[key] !==undefined){
					question.set(key, params[key]);
				}
			});
			question.save();
			this.transitionTo('index');
		},

	}

});
