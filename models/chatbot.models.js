const moment = require("moment");
const { connectToDb } = require(".");

class ChatbotModel {
  async getChats(userId) {
    const connection = await connectToDb();

    const [chats] = await connection.query(
      `SELECT
      * FROM chats WHERE user_id = ?`,
      [userId],
    );

    await connection.end();

    return chats;
  }

  async createChat(chatData) {
    const user_id = chatData.user_id;
    const title = chatData.title || "New Chat";

    const connection = await connectToDb();

    const [result] = await connection.query(
      `INSERT INTO chats (user_id, title) VALUES (?, ?)`,
      [user_id, title],
    );

    await connection.end();

    return {
      id: result.insertId,
      user_id,
      title,
    };
  }

  async getChatById(chatId) {
    const connection = await connectToDb();

    const [chats] = await connection.query(
      `SELECT * FROM chats WHERE id = ?`,
      [chatId],
    );

    await connection.end();
    return chat || null;
  }

  async getChat(chatId) {
    const connection = await connectToDb();

    const [messages] = await connection.query(
      `SELECT
      * FROM messages WHERE chat_id = ?`,
      [chatId],
    );

    return messages;
  }

  async updateChat(chatId, updateData) {
    const connection = await connectToDb();

    const [result] = await connection.query(
      `UPDATE chats SET title = ? WHERE id = ?`,
      [Data,title, chatId],
    );

    await connection.end();
    return result.affectedRows > 0;
  }

  async deleteChat(chatId) {
    const connection = await connectToDb();

    await connection.query(`DELETE FROM messages WHERE chat_id = ?`, [chatId]);
    const [result] = await connection.query(`DELETE FROM chats WHERE id = ?`,
    [chatId]);

    await connection.end();

    return result.affectedRows > 0;
  }

  async insertMessageU({ chat_id, type, content }) {
    const connection = await connectToDb();

    const [insertMessage] = await connection.query(
      `INSERT INTO messages (chat_id, type, content) VALUES (?, ?, ?)`,
      [chat_id, type, content],
    );

    if (insertMessage.affectedRows > 1) {
      return true;
    }

    return false;
  }
  async updateHistoryChat({ user_id }) {
    const connection = await connectToDb();

    const [checkLimit] = await connection.query(
      `SELECT id, user_id, last_time_chat, count_chat FROM chat_limits WHERE user_id = ?`,
      [user_id],
    );

    if (checkLimit.length === 0) {
      await connection.query(
        `INSERT INTO chat_limits (user_id, last_time_chat, count_chat) VALUES (?, ?, ?)`,
        [user_id, moment().format("YYYY-MM-DD HH:mm:ss"), 1],
      );
    } else {
      await connection.query(
        `UPDATE chat_limits SET last_time_chat = ?, count_chat = ? WHERE user_id = ?`,
        [
          moment().format("YYYY-MM-DD HH:mm:ss"),
          checkLimit[0].count_chat + 1,
          user_id,
        ],
      );
    }
  }
  async checkLimitChat({ user_id }) {
    const connection = await connectToDb();

    const [checkLimit] = await connection.query(
      `SELECT id, user_id, last_time_chat, count_chat FROM chat_limits WHERE user_id = ?`,
      [user_id],
    );

    if (checkLimit.length === 0) {
      return {
        isLimit: false,
        message: "User belum pernah melakukan chat sebelumnya",
      };
    }

    const limit = checkLimit[0].max_chat || 1;
    const minuteLimit = 5;

    const now = moment();
    const lastChat = moment(checkLimit[0].last_time_chat).add(
      minuteLimit,
      "minutes",
    );

    if (now.isAfter(lastChat)) {
    }
  }
}

module.exports = new ChatbotModel();