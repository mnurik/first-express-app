import mongoose, { Schema } from 'mongoose';

const citySchema = new Schema({
  name: String,
  country: String,
  capital: {
    type: Boolean,
    required: true,
  },
  location: {
    lat: Number,
    long: Number,
  },
});

export default mongoose.model('City', citySchema);
