import {model, Schema} from 'mongoose';

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Custom Title is required"],
            minlength: [2, "Title name must be 2 characters long"],
            maxlength: [255, "Title name must be less than 255 characters long"],
        },
        author: {
            type: String,
            required: [true, "Custom author name is required"],
            minlength: [5, "Author name must be 5 characters long"],
            maxlength: [255, "Author name must be less than 255 characters long"],
        },
        pages:{
            type: Number,
            required: [true, "Custom page number is required"],
            minlength: [1, "Page length must be at least 1 page"]
        },
        isAvailable:{
            type: Boolean,
            default: false,
        },
    }, 
    {timestamps: true}
);
const Book = model("Book", bookSchema);
export default Book