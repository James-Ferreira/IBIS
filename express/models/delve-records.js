import mongoose from "mongoose"
const Schema = mongoose.Schema;

/* DelveEntry*/
const DelveEntrySchema = new Schema({
  node_id: {type: String, required: true},
  timestamp: String,
})

/* DelveResult */
const DelveResultSchema = new Schema({
  node_id: {type: String, required: true},
  time_sent: String,
  target_addr: String,
  ibis_sender_addr: String,
  receipts: [TTxReceiptSchema],
})
export const TTxRecordModel = mongoose.model("TTxRecord", TTxRecordSchema)
