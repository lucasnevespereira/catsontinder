import React from 'react';
import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h2>This is the chat screen</h2>
          </Route>
          <Route path="/">
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
