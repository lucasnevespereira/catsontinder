import React from 'react';
import Chat from './Chat';
import './Chats.css';

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Markos"
        message="Hey There 😃"
        timestamp="25 seconds ago"
        profilePic="https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />

      <Chat
        name="Rooney"
        message="How are u feeling today?"
        timestamp="18 minutes ago"
        profilePic="https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />

      <Chat
        name="Aliss"
        message="Pleassse answer me"
        timestamp="3 days ago"
        profilePic="https://images.pexels.com/photos/2064110/pexels-photo-2064110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />

      <Chat
        name="MouniK"
        message="I don't have any milk 😭"
        timestamp="1 week ago"
        profilePic="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
    </div>
  );
};

export default Chats;
