const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:
        "https://mir-s3-cdn-cf.behance.net/projects/404/b7b396154245865.Y3JvcCw1NzUzLDQ1MDAsMTEyNSww.jpg",
    },
    blog: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timeStamps: true }
);

module.exports.User = mongoose.model("User", userSchema);
