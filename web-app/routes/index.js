var express = require('express'),
    assign = require('object-assign');
    router = express.Router(),
    modelDefaults = {
        title: 'CSS Goodies'
    };

/* GET home page. */
router.get('/', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'grids' });
    res.render('index', model);
});

/* GET grids page. */
router.get('/grids', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'grids' });
    res.render('grids', model);
});

/* GET typography page. */
router.get('/typography', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'typography' });
    res.render('typography', model);
});

/* GET tables page. */
router.get('/tables', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'tables' });
    res.render('tables', model);
});

/* GET containers page. */
router.get('/containers', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'containers' });
    res.render('containers', model);
});

/* GET icons page. */
router.get('/icons', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'icons' });
    res.render('icons', model);
});

/* GET buttons page. */
router.get('/buttons', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'buttons' });
    res.render('buttons', model);
});

/* GET forms page. */
router.get('/forms', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'forms' });
    res.render('forms', model);
});

/* GET switches page. */
router.get('/switches', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'switches' });
    res.render('switches', model);
});

/* GET steppers page. */
router.get('/steppers', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'steppers' });
    res.render('steppers', model);
});

/* GET alerts page. */
router.get('/alerts', function(req, res, next) {
    var model = assign({}, modelDefaults, { nav: 'alerts' });
    res.render('alerts', model);
});

module.exports = router;
