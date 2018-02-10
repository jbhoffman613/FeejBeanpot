module.exports = function(app) {
    var gc = require('./controllers/gc');

    app.get('/gc', gc.findAll);
    // app.get('/musicians/:id', musicians.findById);
    app.post('/gc', gc.add);
    // app.post('/musicians/:id', musicians.update);
    app.delete('/gc/:id', gc.delete);
    // app.get('/import', musicians.import)
}
