const books = [];
export const getAllBook = (req, res) => {
    res.json(books);
};
export const createBook = (req, res) => {
    books.push(req.body);
    res.json(books);
};
