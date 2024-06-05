const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createPost = (data) => {
    prisma.post.create({ data })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
const readPostWithSlug = () => {

}
const readPost = () => {

}
const updatePost = () => {

}
const deletePost = () => {

}

module.exports = {
    createPost,
    readPostWithSlug,
    readPost,
    updatePost,
    deletePost
}