import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

const TinderCards = () => {
  const [cats, setCats] = useState([
    {
      name: 'Mia',
      url:
        'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },

    {
      name: 'Nato',
      url:
        'https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ]);

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
