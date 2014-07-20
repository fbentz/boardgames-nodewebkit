var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
	routes: {
		"boardgames": "list",
		"boardgames/create": "create" 
	},

	list: list
});

function list() {
	console.log('test');
}
