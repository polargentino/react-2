// src/components/Card.js
import React from 'react';

const Card = ({ image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt="Curso" style={styles.image} />
    </div>
  );
};

const styles = {
  card: { minWidth: '150px', height: '200px', overflow: 'hidden' },
  image: { width: '100%', height: '100%', objectFit: 'cover',  borderRadius: '10%', }
};

export default Card;
