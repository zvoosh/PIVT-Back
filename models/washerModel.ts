import {Schema, model} from 'mongoose';

const washerSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  adress: {
    type: String,
    required: true,
  },
  coordinate: {
    type: [String],
    required: false,
  },
  service: {
    type: [String],
    required: true,
  }, 
  userRef: {
    type: [String],
    required: true, 
  },
  session: {
    type: [{
      sessionDate: String,
      startingTime: String,
      endTime: String,
    }]
  },
  contact: {
    type: String,
  },
  review: {
    type: [Number],
  },
  workingHours: {
    type: [String],
  },
  imagePaths: {
    type: [String],
  },
  workingDays: {
    type: {
      monday: Boolean,
      tuesday: Boolean,
      wednesday: Boolean,
      thursday: Boolean,
      friday: Boolean,
      saturday: Boolean,
      sunday: Boolean,
    }
  }
});

const Washer = model("washer", washerSchema);

module.exports = Washer;