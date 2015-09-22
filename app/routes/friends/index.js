import Ember from 'ember';

export default Ember.Route.extend({
	// Lists all friends
	model: function(){
		return this.store.findAll('friend');
	}
});
