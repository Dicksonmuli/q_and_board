import Ember from 'ember';

export default Ember.Component.extend({
	qtnFormShowing: false,

	actions: {
		showForm(){
			this.set('qtnFormShowing', true);
		},
		saveQtn(params){
			params = {
			author: this.get('author') ? this.get('author') :"",
			description: this.get('description') ? this.get('description') :"",
			qtn: this.get('qtn') ? this.get('qtn') :"",
		};
		this.set('qtnFormShowing', false);
		this.sendAction('saveQtn', params);
	}
	}
});
