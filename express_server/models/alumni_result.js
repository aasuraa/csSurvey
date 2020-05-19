let mongoose = require('mongoose');
let Schema = mongoose.Schema;

AlumniSurveyResultSchema = new Schema(
    {
        q1: {type: Number},
        q2: {type: Number},
        q3: {type: Number},
        q4: {type: Number}
    }
);

// virtual for survey url
AlumniSurveyResultSchema.virtual('url')
    .get(function() {
        return '/survey/alumni/result/' + this._id;
    });

module.exports = mongoose.model('AlumniSurveyResult', AlumniSurveyResultSchema);