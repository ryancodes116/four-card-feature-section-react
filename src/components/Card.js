import React from 'react';
import styles from '../styles/Card.module.css';

function Card(props) {
  let classes = [styles.card];
  const borderStyle = {
    borderTop: `4px solid ${props.border}`,
  };

  return (
    <div className={classes.join(' ')} style={borderStyle}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>{props.text}</p>
      <img className={styles.icon} src={props.imageUrl} alt={props.alt} />
    </div>
  );
}

export default Card;
