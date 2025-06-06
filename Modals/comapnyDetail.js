import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    post: {
        type: String,
        required: true
    },

    last_date: {
        type: Date,
        required: true
    },

    description: {
        type: String
    },

    referrer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
})

export const Company_Details = mongoose.model("Company_Details", schema)