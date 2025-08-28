const { connectToDb } = require(".");

class CategoryModel {
    async getCategories() {
        const connection = await connectToDb();
        const [categories] = await connection.query(`SELECT * FROM kategori`);
        await connection.end();
        return categories;
    }
    //new
    async getCategoriesById(id) {
        const connection = await connectToDb();
        const [categories] = await connection.query(`SELECT * FROM kategori WHERE id = ?`, [id]);
}
}
module.exports = new CategoryModel();