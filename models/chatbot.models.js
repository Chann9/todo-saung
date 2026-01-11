const { connectToDb } = require(".");

class ChatbotModel {
    async getChats(userId) {
        const connection = await connectToDb();
        const [chats] = await connection.query(`SELECT * FROM chats WHERE user_id = ?`, [userId]);
        await connection.end();
        return chats;
    }

    async createChat(data) {
        const { user_id = chatsdata,userId;
}

module.exports = ChatbotModel;