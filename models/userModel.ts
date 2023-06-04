import {Schema, model} from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ['Majstor', 'Administrator', 'Klijent'],
    required: true,
  },
  adresa: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  carType: {
    type: String,
  },
});

const User = model("user", userSchema);

module.exports = User;