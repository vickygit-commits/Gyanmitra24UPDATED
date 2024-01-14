const mongoose = require('mongoose');

const workregSchema = mongoose.Schema({
    workshopid: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: 'workshop'
    },
    workshopname: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: 'workshop'
    },
    user_id: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: [true, 'You have already registered in a Workshop'],

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

let workshop_registration = mongoose.model('Workshop_registration', workregSchema);
module.exports = workshop_registration;
