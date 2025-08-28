const { connectToDb } = require(".");

class Usermodel {
  async getUsers() {
    const connection = await connectToDb();

    const [users] = await connection.query("SELECT * from users");

    await connection.end();

    return users;
  }

  async getUserById(id) {
    const connection = await connectToDb();

    const [users] = await connection.query(
      `SELECT * from users WHERE id = ${id}`
    );

    console.log(users);

    await connection.end();

    return users;
  }
  async createUser(userdata) {
    const { name, email, nickname, password } = userdata;
    const connection = await connectToDb();

    const [result] = await connection.query(
      `
                INSERT INTO
                users (name, email, nickname, password)
                VALUES (?, ?, ?, ?)`,
      [name, email, nickname, password]
    );

    await connection.end();

    return result;
  }

  async updateusers(id, userdata) {
    const connection = await connectToDb();

    //validasi data
    if (userdata.id) {
      delete userdata.id;
    }

    //buatkan starting dengan format [column] = ? diisi dengan value
    //pembuatan string tersebut berdasarkan userdata

    let updateString = "";
    const values = [];

    Object.keys(userdata).forEach((key) => {
      //memasukan column ke updateString
      updateString += `${key} = ?,`;

      //memasukkan value ke values
      values.push(userdata[key]);
    });

    //menghapus koma terakhir
    updateString = updateString.slice(0, -1);

    values.push(id);

    const [result] = await connection.query(
      `UPDATE users SET ${updateString} WHERE id = ?`,
      values
    );

    return result;
  }

  async deleteusers(id) {
    const connection = await connectToDb();

    const [result] = await connection.query(`DELETE FROM users WHERE id = ?`, [
      id,
    ]);

    await connection.end();

    return result;
  }
}

module.exports = new Usermodel();
