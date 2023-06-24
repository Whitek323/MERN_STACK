import { InferSchemaType, Schema ,model} from "mongoose";

const noteScehema = new Schema({
    title:{type:String,require:true},
    text:{type:String,require:true}
},{timestamps:true});

type Note = InferSchemaType<typeof noteScehema>;

export default model<Note>("Note",noteScehema);