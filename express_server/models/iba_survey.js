let mongoose = require('mongoose');
let Schema = mongoose.Schema;

IbaSurveySchema = new Schema(
    {
        title: {type: String, required: true, unique: true},
        input_type: {type: String},
        question_type: {type: Number},
        type: {type: String, required: true, default: "question"},
        result:
            {
                semester: {type: String},
                year: {type: Number},
                rate: {type: Array, default: [0, 0, 0, 0, 0]},
                comment: {type: String}
            }
    }
);

module.exports = mongoose.model('IbaSurvey', IbaSurveySchema);