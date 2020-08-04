import React, { useState, useEffect } from 'react';
import './TinderCards.css';
import database from '../firebase';
import TinderCard from 'react-tinder-card';

const TinderCards = () => {
  const [cats, setCats] = useState([]);

  // Piece of code that runs based on condition
  useEffect(() => {
    // code runs here
    // this will run once when the component loads
    database.collection('cats').onSnapshot((snapshot) => {
      setCats(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // Bad in React
  // const cats = [];
  // cats.push('Mia','Nato')

  // Good (Push to an array in React)
  // setCats([...cats, 'Mia', 'Nato']);

  return (
    <div>
      <div className="tinderCards__cardsContainer">
        {cats.map((cat) => (
          <TinderCard
            className="swipe"
            key={cat.name}
            preventSwipe={['up', 'down']}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${cat.url})`,
              }}
            >
              <h3>{cat.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
