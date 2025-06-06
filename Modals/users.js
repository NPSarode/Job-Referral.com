import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  role_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Roles",
  },

  created_on: {
    type: Date,
    default: Date.now,
  },

  full_name: {
    type: String
  },

  address: {
    type: String
  },

  contact_no: {
    type: Number
  },

  photo: {
    type: String
  },

  biometric: {
    type: String
  },

});

export const Users = mongoose.model("Users", schema);
