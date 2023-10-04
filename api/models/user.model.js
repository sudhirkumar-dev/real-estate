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
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
