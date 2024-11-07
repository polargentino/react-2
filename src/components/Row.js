// src/components/Row.js
import React from 'react';
import Card from './Card';

const Row = ({ title, images }) => {
  return (
    <div style={styles.row}>
      <h2>{title}</h2>
      <div style={styles.cardsContainer}>
        {images.map((image, index) => (
          <Card key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  row: { padding: '20px' },
  cardsContainer: { display: 'flex', gap: '10px', overflowX: 'scroll' }
};

export default Row;
