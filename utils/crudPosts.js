const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createPost = (data) => {
    prisma.post.create({ data })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
const readPostWithSlug = (slug) => {
    prisma.post.findUnique({
        where: { slug }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
const readPost = () => {
    prisma.post.findMany()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
const updatePost = (slug, data) => {
    prisma.post.update({ where: { slug }, data })
    .then(data => console.log(data))
    .catch(err => console.log(err));
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