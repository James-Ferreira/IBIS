import * as Mongoose from "mongoose";

// Represents a single result from a Delve (i.e. an unconfirmed peer)
export interface DelveEntry {
    node_id: string,
    timestamp: string,
}

export const DelveEntrySchema = new Mongoose.Schema<DelveEntry>({
    node_id: {type: String, required: true},
    timestamp: {type: String, required: true},
})

// Represents a collection of delve results for a peer (i.e. recreated DHT for a given node_id)
export interface DelveResults {
    node_id: string,
    delved_peers: [DelveEntry]
}
export const DelveResultsSchema = new Mongoose.Schema<DelveResults>({
    node_id: {type: String, required: true},
    delved_peers: [DelveEntrySchema],
});
    
export const DelveResultsModel = Mongoose.model<DelveResults>('DelveResults', DelveResultsSchema);