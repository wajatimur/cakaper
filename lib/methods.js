Meteor.methods({
    newMessage(message) {
        // Message validation
        check(message, {
            text: String,
            chatId: String
        });

        // Creating message object
        message.timestamp = new Date();
        var messageId = Messages.insert(message);
        
        // Add last message to chat object
        Chats.update(message.chatId, { $set: { message: message } });

        return messageId;
    }
});
