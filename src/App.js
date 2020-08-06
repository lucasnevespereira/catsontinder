import React from 'react';
import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:cat">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// HEADER

// App Cards
// Buttons

/* CHAT SCREEN */

/* Individual chats screen */
