import React from 'react';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';
import './ChatScreen.css';

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Markos',
      image:
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      message: 'Whats Up? ',
    },
    {
      name: 'Markos',
      image:
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      message: 'How are u ? ',
    },
    {
      message: 'Hi! Im doing fine. Hbu ?',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className="chatscreen">
      <p className="chatscreen__timestamp">
        You matched with Markos on 10/02/20
      </p>
      {messages.map((mes) =>
        mes.name ? (
          <div className="chatscreen__message">
            <Avatar className="chat__image" alt={mes.name} src={mes.image} />
            <p className="chatscreen__text">{mes.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textUser">{mes.message}</p>
          </div>
        )
      )}
      <form className="chatscreen__input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatscreen__inputField"
          placeholder="Try to type something with your paws..."
        />

        <IconButton
          onClick={handleSend}
          type="submit"
          className="chatscreen__inputBtn"
        >
          <PetsIcon
            className="chatscreen__sendIcon"
            style={{ color: '#E6646E' }}
          />
        </IconButton>
      </form>
    </div>
  );
};

export default ChatScreen;
