import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a Username"],
      unique: [true, "Username has already been used"],
    },
    password: {
      type: String,
      required: [true, "Please provide a Password"],
    },
    email: {
      type: String,
      required: [true, "Please provide a Email"],
      unique: [true, "Email has already been used"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
