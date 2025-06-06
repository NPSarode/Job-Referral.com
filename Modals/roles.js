import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  role_name: {
    type: String,
    required: true,
    unique: true,
  },

  created_on: {
    type: Date,
    default: Date.now,
  },

  description: {
    type: String
  },

});

export const Roles = mongoose.model("Roles", schema);
