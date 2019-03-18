import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  name: String,
  brand: String,
  price: Number,
  options: [
    {
      size: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Size',
      },
    },
  ],
});

export default mongoose.model('Product', productSchema);
