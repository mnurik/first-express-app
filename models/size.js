import mongoose, { Schema } from 'mongoose';

const sizeSchema = new Schema({
  name: String,
});

export default mongoose.model('Size', sizeSchema);
