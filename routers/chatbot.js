const express = require("express");
const ChatbotModel = require("../models/chatbot.models");
const router = express.Router();

router.get("/chats", async function (req, res) {
    //todo : ambil user id dari auth nanti
    const chatsDb = await ChatbotModel().getChats(1);
    const chats = [
        {
      id: 1,
      title: 'Getting Started with AI',
    },
    {
      id: 2,
      title: 'Project Planning Discussion',
    },
    {
      id: 3,
      title: 'shopping Planning Discussion',
    },
    {
      id: 4,
      title: 'test',
    },
    ];

    return res.status(200).json({
        data: chats,
    });
})

module.exports = router;