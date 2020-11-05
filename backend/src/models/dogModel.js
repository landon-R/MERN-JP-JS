const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
  {
    name: { type: String, default: "dog show", required: true },
    raza: { type: String, default: "show" },
    precio: { type: Number, required: true },
    description: { type: String },
    filename: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    url: { type: String },
    size: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Dog", dogSchema);
