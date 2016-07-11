define([
	'jquery',
	'underscore',
	'backbone',
	'model/model',
	'model/collection'
], function($, _, Backbone,Todo , todos) {

	var view = Backbone.View.extend({

		el: $(".container"),

		id: 0,

		template: _.template($("#todo-content").html()),

		initialize: function(opts) {
			$(this.el).off('click');  //Prevent repeat binding event
		},
		events: {
			'click #submit-todo': 'submit',
			'click .check': 'check'
		},
		render: function() {
		},

		submit: function() {
			var content = $('#input-todo').val();
			$('#input-todo').val("");

			if (content) {
				var todo = new Todo({id:this.id, content: content, state: 0});
				todos.push(todo);
				var data = todo.toJSON();
				$(".todo-content").append(this.template({'data': data}));
				this.id++;
			};
		},

		check: function(e) {
			e.target.disabled = true;
			var id = $(e.target).data('relid');
			var item = $("#item_" + id);
			var a = todos.get(id);
			a.set('state',1);

			item.addClass('finish');

		}	
	});

	return view;
});
