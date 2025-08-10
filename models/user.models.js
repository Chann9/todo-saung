const { connectToDb } = require(".");

class Usermodel {
     
    async getUsers() {
        const connection = await connectToDb();

        const [users] = await connection.query('SELECT * from users');

        await connection.end();

        return users;
  }

  async getUserById(id) {
        const connection = await connectToDb();

        const [users] = await connection.query(`SELECT * from users WHERE id = ${id}`);

        console.log(users);

        await connection.end();

        return users;
  }
    async createUser(userdata) {
        const { name, email,nickname, password } = userdata;
        const connection = await connectToDb();
    
            const [result] = await connection.query(`
                INSERT INTO
                users (name, email, nickname, password)
                VALUES (?, ?, ?, ?)`, 
                [name, email, nickname, password]);
    
            await connection.end();
    
            return result;
    }
}

module.exports = new Usermodel();