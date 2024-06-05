const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTag = (data) => {
    prisma.tag.create({ data: {name: data} })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

module.exports = {
    createTag,
}