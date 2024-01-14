const mongoose = require('mongoose');

const eventregSchema = mongoose.Schema({
    eventid: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: 'event'
    },
    eventname: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: 'event'
    },
    user_id: {
        type: mongoose.Schema.Types.String,
        required: true,

        ref: 'user'
    },
    user_name: {
        type: mongoose.Schema.Types.String,
        required: true,

        ref: 'user'
    },

    Payed: {
        type: mongoose.Schema.Types.String,
        default: 'Payed'
    }
});

let event_registration = mongoose.model('Event_registration', eventregSchema);
module.exports = event_registration;
