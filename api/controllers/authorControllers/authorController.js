import Author from '../../models/books/Author.js';

const getAllAuthors = async (req, res) => {
    const { offset = 0, limit = 10 } = req.query;

    try {
        const authors = await Author.find().skip(Number(offset)).limit(Number(limit));
        
        return res.json({
            authors,
        });
    } catch (error) {
        console.error('Error retrieving authors:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};

const getAuthorById = async (req, res) => {
    const { authorId } = req.params;

    try {
        const author = await Author.findById(authorId);

        if (!author) {
          
            return res.status(404).json({ msg: 'Author not found' });
        }

        return res.json({ author });
    } catch (err) {
        console.error('Error retrieving author:', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

export { getAllAuthors, getAuthorById };
