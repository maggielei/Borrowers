import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
		'model.firstName',
		'model.lastName',
		'model.email',
		'model.twitter',
		'model.trusted',
		function(){
			return !Ember.isEmpty(this.get('model.firstName')) &&
				   !Ember.isEmpty(this.get('model.lastName')) &&
				   !Ember.isEmpty(this.get('email')) &&
				   !Ember.isEmpty(this.get('twitter'));
		}
	),
	actions: {
		save: function(){
			if(this.get('isValid')){
				var _this = this;
				this.get('model').save().then(function(friend){
					_this.transitionToRoute('friends.show', friend);
				});
			} else {
				this.set('errorMessage', 'Fill out all the fields.');
			}

			return false;
		},
		cancel: function(){
			this.transitionToRoute('friends');

			return false;
		}
	}
});
