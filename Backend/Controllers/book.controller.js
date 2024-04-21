// import Book from "../model/book.model.js";
import Book from "../model/book.modol.js";
export const getBook = async(req, res) => {
    try {
        
        const book = await Book.find();
        // console.log();
        console.log(book)
        return res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};