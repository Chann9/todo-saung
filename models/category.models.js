const { connectToDb } = require(".");

class CategoryModel {
    async getCategories() {
        const connection = await connectToDb();
        const [categories] = await connection.query(`SELECT * FROM category`);
        await connection.end();
        return categories;
    }
}

module.exports = new CategoryModel();