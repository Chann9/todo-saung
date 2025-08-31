const { connectToDb } = require(".");

class TodoModel {
    async getTodos() {
        const connection = await connectToDb();
        const [todos] = await connection.query(`SELECT * FROM todos`);
        await connection.end();
        return todos;
    }
    //new
    async getTodoById(id) {
    const connection = await connectToDb();
    const [todos] = await connection.query(`SELECT * FROM todos WHERE id = ?`, [id]);
    await connection.end();
    return todos;
  }

    async createTodo(data) {
    const { tittle, description, is_completed, kategori_id, user_id,due_date } = data;
    const connection = await connectToDb();
    const [result] = await connection.query(
      `INSERT INTO todos (tittle, description, is_completed, kategori_id, user_id,due_date) VALUES (?, ?, ?, ?, ?,?)`,
      [tittle, description, is_completed, kategori_id, user_id,due_date]
    );
    await connection.end();
    return result;
  }

    async updateTodo(id, data) {
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
      `UPDATE todos SET ${updateString} WHERE id = ?`,
      values
    );
    await connection.end();
    return result;
  }

    async deleteTodo(id) {
    const connection = await connectToDb();
    const [result] = await connection.query(`DELETE FROM todos WHERE id = ?`, [id]);
    await connection.end();
    return result;
  }
    }

module.exports = new TodoModel();