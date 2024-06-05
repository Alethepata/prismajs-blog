const { createPost, readPostWithSlug, readPost, updatePost, deletePost } = require('./utils/crudPosts');

const newPost = {
    "title": "Ciambellone",
    "slug": "ciambellone",
    "content": "Ciambellone buono",
    "published": true,
}

// createPost(newPost);

// readPostWithSlug('cracker-alla-barbabeitola');

// readPost();

// updatePost('cracker-alla-barbabeitola', {content: 'solo dei cracker alla barbabeitola'});

deletePost('ciambellone');
