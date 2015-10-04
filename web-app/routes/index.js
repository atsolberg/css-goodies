var express = require('express'),
    assign = require('object-assign'),
    fs = require('fs'),
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
    res.render('icons', assign({}, modelDefaults, { nav: 'icons' }));
});
/* GET icons data. */
router.get('/icons.json', function(req, res, next) {
    
    var chunk = function(arr, chunkSize) {
        var groups = [], i;
        for (i = 0; i < arr.length; i += chunkSize) {
            groups.push(arr.slice(i, i + chunkSize));
        }
        return groups;
    },
    rules = [], lines;

    lines = fs.readFileSync('../less/icons.less', 'utf8').split('\n');
    lines.forEach(function(line) {
        var classEnd;
        if (line.indexOf('icon-') !== -1) {
            classEnd = line.indexOf('{');
            if (classEnd !== -1) {
                rules.push(line.substring(1, classEnd -1));
            }
        }
    });

    rules = chunk(rules, 4);
    res.json(rules);
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
