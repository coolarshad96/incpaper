import React, { useState } from 'react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (messageText) => {
    const newMessage = { text: messageText, sender: 'user' };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-page">
      <h1>Chat App</h1>
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;