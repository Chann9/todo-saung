const { connectToDb } = require(".");

class CategoryModel {
  async getCategories() {
    const connection = await connectToDb();
    const [categories] = await connection.query(`SELECT * FROM kategori`);
    await connection.end();
    return categories;
  }
  //new
  async getCategoryById(id) { 
    const connection = await connectToDb();
    const [categories] = await connection.query(
      `SELECT * FROM kategori WHERE id = ?`,
      [id]
    );
    await connection.end();
    return categories;
  }

  async createCategory(data) {
    const { kategori_name } = data;
    const connection = await connectToDb();
    const [result] = await connection.query(
      `INSERT INTO kategori (kategori_name,) VALUES (?)`,
      [kategori_name]
    );
    await connection.end();
    return result;
  }

  async updateCategory(id, data) {
    const connection = await connectToDb();
    if (data.id) delete data.id;

    let updateString = "";
    const values = [];
    Object.keys(data).forEach((key) => {
      updateString += `${key} = ?,`;
      values.push(data[key]);
    });
    updateString = updateString.slice(0, -1);
    values.push(id);

    const [result] = await connection.query(
      `UPDATE kategori SET ${updateString} WHERE id = ?`,
      values
    );
    await connection.end();
    return result;
  }

  async deleteCategory(id) {
    const connection = await connectToDb();
    const [result] = await connection.query(
      `DELETE FROM kategori WHERE id = ?`,
      [id]
    );
    await connection.end();
    return result;
  }
}

module.exports = new CategoryModel();