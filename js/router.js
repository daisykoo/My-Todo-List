define([
	'jquery',
	'underscore',
	'backbone',
	'views/mainView',
	'views/historyView' 
], function($, _, Backbone, mainView, historyView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			//Defind URL routes
			"history" : "history",

			//Default
			"*actions": "defaultAction"
		}
	});

	var initialize = function() {
		var app_route = new AppRouter;
		app_route.on('route:defaultAction', function() {
			var main = new mainView();
			main.render();
		});

		app_route.on('route:history', function() {
			var history= new historyView();
			history.render();
		
		});

	Backbone.history.start();

	};

	return {
		initialize: initialize
	};
});



