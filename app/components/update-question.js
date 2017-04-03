import Ember from 'ember';

export default Ember.Component.extend({
	updateQtnForm: false,
  // actions
  actions: {
    updateQtnForm(){
      this.set('updateQtnForm', true);
    },
    update(question){
      var params = {
        author: this.get('author'),
       description: this.get('description'),
       qtn: this.get('qtn'),
     };
      this.set('updateQtnForm', false);
      this.sendAction('update', question, params);
    }
  }
});
