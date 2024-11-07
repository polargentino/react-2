// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Contacto:</p>
      <p>Email: polargentino@gmail.com</p>
      <p>Teléfono: 4572964</p>
      <p>Redes Sociales: Instagram / Facebook</p>
      <p>Proyecto realizado por el curso de Diseño Web</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px',
  },
};

export default Footer;