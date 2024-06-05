const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCategory = (data) => {
    prisma.category.create({ data: {name: data} })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

module.exports = {
    createCategory,
}