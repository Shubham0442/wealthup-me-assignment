const mongoose = require("mongoose");

const codeSchema = mongoose.Schema({
  code: { type: String, required: true },
  created_at: { type: Date }
});

const codeModel = mongoose.model("Code", codeSchema);

module.exports = { codeModel };
