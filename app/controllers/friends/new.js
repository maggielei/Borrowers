import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function(){
			console.log("+- save action in friends new controller");

			return true;
		},
		cancel: function(){
			console.log("+- cancel action in friends new controller");

			return true;
		}
	}
});
