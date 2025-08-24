const { connectToDb } = require(".");

class TodoModel {
    async getTodos() {
        const connection = await connectToDb();
        const [todos] = await connection.query(`SELECT * FROM todos`);
        await connection.end();
        return todos;
    }
}

module.exports = new TodoModel();