var mongoose = require('mongoose');
Schema = mongoose.Schema;

var GCSchema = new Schema({
    classroomCode: { type: String, required: true },
}, { strict : false } );

mongoose.model('GC', GCSchema);
