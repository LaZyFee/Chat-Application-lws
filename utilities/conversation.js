// utils/conversation.js
const Conversation = require('../models/Conversation'); // Adjust the path as needed

const updateConversation = async (conversationId, newMessage) => {
    await Conversation.updateOne(
        { _id: conversationId },
        {
            $set: { last_updated: new Date() },
            $push: { messages: newMessage }
        }
    );
};

module.exports = updateConversation;
