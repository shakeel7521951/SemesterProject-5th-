import mongoose, { Document, Schema } from "mongoose";

interface Product extends Document {
  plateNo: string;
  price: Number;
  discount: Number;
  category: string;
  createdTime: Date;
}

const numberPlateSchema = new Schema<Product>({
  plateNo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
  },
  createdTime: {
    type: Date,
    default:Date.now(),
  },
});

const plateNumber =
  mongoose.models.plateNumber ||
  mongoose.model<Product>("plateNumber", numberPlateSchema);
export default plateNumber;
