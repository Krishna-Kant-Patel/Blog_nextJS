const Blog = require('../models/Blog');

const createPost = async (req, res) => {
    const { title, content } = req.body;

    try {
        const blog = new Blog({
            title,
            content,
            author: req.user.id,
        });

        await blog.save();
        res.status(201).json(blog);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getPosts = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'name');
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createPost, getPosts };
