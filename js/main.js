require.config({
	paths: {
        zepto: 'libs/zepto-1.1.6.min',
        jquery: 'jquery',
        underscore: 'libs/underscore-1.8.2.min',
        backbone: 'libs/backbone-1.1.2.min',
        model: 'model',
        view: 'views',
    }
});

require(['app'], function (App) {
    App.initialize();
});