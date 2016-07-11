define([
	'jquery',
	'underscore',
	'backbone',
	], function($, _, Backbone) {

		var Todos = Backbone.Collection.extend();
		var todos = new Todos();

		return todos;
	});


