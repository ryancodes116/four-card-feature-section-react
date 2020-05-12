import React from 'react';
import styles from '../styles/CardSection.module.css';

import cards from '../card-info';
import Card from './Card';

function CardSection() {
  const leftCard = cards
    .filter((card) => {
      return card.id === 1;
    })
    .map((card) => {
      return (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          imageUrl={card.imageUrl}
          alt={card.alt}
          border={card.border}
        />
      );
    });

  const middleCards = cards
    .filter((card) => {
      return card.id >= 2 && card.id <= 3;
    })
    .map((card) => {
      return (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          imageUrl={card.imageUrl}
          alt={card.alt}
          border={card.border}
        />
      );
    });

  const rightCard = cards
    .filter((card) => {
      return card.id === 4;
    })
    .map((card) => {
      return (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          imageUrl={card.imageUrl}
          alt={card.alt}
          border={card.border}
        />
      );
    });

  return (
    <section className={styles.wrapper}>
      <div className={styles.cards}>
        {leftCard}
        <div className={styles.middleCards}>{middleCards}</div>
        {rightCard}
      </div>
    </section>
  );
}

export default CardSection;
