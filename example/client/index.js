require('ember');

App = Em.Application.create();

Em.TEMPLATES.index = Em.HTMLBars.template(require('./template'));

App.IndexRoute = Em.Route.extend({
  model: function(){
    return 'Hello';
  }
});
