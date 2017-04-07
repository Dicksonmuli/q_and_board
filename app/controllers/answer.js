import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
        voteUp: function () {
            this.set('votes', this.get('votes') + 1);
        },
        voteDown: function () {
            console.log("voting down");
            this.set('votes', this.get('votes') - 1);
        }
    }

});
