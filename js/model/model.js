define([
	'jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone) {
		var Todo = Backbone.Model.extend({
				id: '',
				content: '',
				state: 0
			});
		return Todo;
	});