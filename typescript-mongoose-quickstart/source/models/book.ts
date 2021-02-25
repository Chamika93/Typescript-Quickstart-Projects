import mongoose, {Schema} from 'mongoose';
import IBook from '../interfaces/book';

const BookSchema: Schema = new Schema(
    {
        title: {type: String, required:true},
        author: {type: String, required:true},
        extraInformation: {type:String}
    }, 
    {
         timestamps:true
    }
);

BookSchema.post<IBook>('save',function(){
     this.extraInformation = "extra info"
})

export default mongoose.model<IBook>('Book',BookSchema);