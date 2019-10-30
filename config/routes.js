module.exports = function(router) {
  router.get('/', function(req, res) {
    res.render('home.handlebars');
  });

  router.get('/saved', function(req, res) {
    res.render('saved');
  });
};
