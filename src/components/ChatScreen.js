import React from 'react';
import { useState } from 'react';

const ChatScreen = () => {
  const [messages, setMessages] = useState({});

  return (
    <div className="chatscreen">
      <h2>ChatScreen</h2>
    </div>
  );
};

export default ChatScreen;
