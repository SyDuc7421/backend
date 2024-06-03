import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  deliveryDetails: {
    email: { type: String, require: true },
    name: { type: String, require: true },
    address: { type: String, require: true },
    city: { type: String, require: true },
  },
  cartItems: [
    {
      menuItemId: { type: String, require: true },
      name: { type: String, require: true },
      quantity: { type: String, require: true },
    },
  ],
  totalAmount: Number,
  status: {
    type: String,
    enum: ["placed", "paid", "inProgress", "outForDelivery", "delivery"],
  },
  createdAt: { type: Date, default: Date.now() },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
