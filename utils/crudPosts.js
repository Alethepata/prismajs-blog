const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createPost = (data) => {
    prisma.post.create({ data })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

const readPostWithSlug = (slug) => {
    prisma.post.findUnique({
        where: { slug },
        include: {
            category: {
                select: {
                    name: true
                }
            },
            tags: {
                select: {
                    name: true
                }
            }
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

const readPost = () => {
    prisma.post.findMany({
        include: {
            category: {
                select: {
                    name: true
                }
            },
            tags: {
                select: {
                    name: true
                }
            }
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

const updatePost = (slug, data) => {
    prisma.post.update({ where: { slug }, data })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

const deletePost = (slug) => {
    prisma.post.delete({ where: { slug } })
    .then(data => console.log(`Elinitato: ${data.slug}`))
    .catch(err => console.log(err));
}

const publishedPosts = () => {
    prisma.post.findMany({
        where: {
            published: true
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

module.exports = {
    createPost,
    readPostWithSlug,
    readPost,
    updatePost,
    deletePost,
    publishedPosts
}