import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  login: String,
  password: String,
  name: {
    first: String,
    last: String,
  },
});

export default mongoose.model('User', userSchema);
