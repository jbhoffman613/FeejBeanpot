var mongoose = require('mongoose'),
GC = mongoose.model('GC');
var authentication = require('../authentication');
var spreadsheet = require('../spreadsheet');

exports.findAll = function(req, res) {
    GC.find({}, function(err, results) {
        return res.send(results);
    });
};

// exports.findById = function(req, res) {
//     var id = req.params.id;
//     Musician.findOne({'_id': id}, function(err, result) {
//         return res.send(result);
//     });
// };

exports.add = function(req, res) {
    console.log(req.body)

    GC.create(req.body, function (err, gc) {
        if (err) return console.log(err);
        return res.send(gc);
    });

    authentication.authenticate().then((auth)=>{
        spreadsheet.pushData(auth, req.body);
    });
};

// exports.update = function(req, res) {
//   var id = req.params.id;
//   var updates = req.body;
//
//   Musician.update({"_id": id}, req.body,
//     function (err, rawResponse) {
//       if (err) return console.log(err);
//       console.log('Updated %d musicians', rawResponse.nModified);
//       return res.sendStatus(202);
//   });
// };

exports.delete = function(req, res) {
    var id = req.params.id;
    GC.remove({"_id": id}, function(result) {
        return res.send(result);
    });
};

// exports.import = function(req, res) {
//     Musician.create(
//         { "name": "Ben", "band": "DJ Code Red", "instrument": "Reason" },
//         { "name": "Mike D.","band": "Kingston Kats", "instrument": "drums" },
//         { "name": "Eric", "band": "Eric", "instrument": "piano" },
//         { "name": "Paul", "band": "The Eyeliner", "instrument": "guitar" }
//     , function (err) {
//         if (err) return console.log(err);
//         return res.sendStatus(202);
//     });
// };
