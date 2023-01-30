const mongoose = require("mongoose")
const { Schema } = mongoose

const packageSchema = new Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model("package", packageSchema)
