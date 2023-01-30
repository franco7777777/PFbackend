const mongoose = require("mongoose")
const { Schema } = mongoose

const flights3Schema = new Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },

    airport: {
      type: String,
      required: true,
    },
    flightId: {
      type: Number,
      required: true,
    },
    departs: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    gate: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    firstclase: {
      type: Number,
      required: true,
    },
    seating: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model("flights3", flights3Schema)
