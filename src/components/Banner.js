// src/components/Banner.js
import React from 'react';
import bannerImage from '../assets/gpt2-moda.webp';

const Banner = () => {
  return (
    <div style={{ ...styles.banner, backgroundImage: `url(${bannerImage})` }}>
      
    </div>
  );
};

const styles = {
  banner: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
   
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
    fontSize: '30px',
  

    }
   
  
  
};


export default Banner;
