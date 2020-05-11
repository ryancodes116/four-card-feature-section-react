import React from 'react';
import styles from '../styles/CardSection.module.css';

import cards from '../card-info';
import Card from './Card';

function CardSection() {
  const cardDeck = cards.map((card) => {
    return (
      <Card
        title={card.title}
        text={card.text}
        imageUrl={card.imageUrl}
        border={card.border}
      />
    );
  });

  return <section className="container">{cardDeck}</section>;
}

export default CardSection;
