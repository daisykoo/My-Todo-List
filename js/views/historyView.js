define([
	'jquery',
	'underscore',
	'backbone',
	'model/collection'
], function($, _, Backbone, todos) {
	var view = Backbone.View.extend({

		el: $('.container'),

		template:null,
		
		initialize: function(opts) {
			// this.template =  _.template($('#a').html());
			$(this.el).off('click');  //Prevent repeat binding event
		},
		
		render: function() {
			var data = todos.toJSON();
			// var tem = this.template({'data': data});
			// this.$el.html(tem);
		}
	});

	return view;
});
