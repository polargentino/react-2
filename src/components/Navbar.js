// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Escuela 637 "Domingo Cullen"</h1>
      <ul style={styles.navLinks}>
        <li>Inicio</li>
        <li>Cursos</li>
        <li>Sobre nosotros</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#111' },
  logo: { color: 'white' },
  navLinks: { listStyle: 'none', display: 'flex', gap: '15px', color: 'white' },
};

export default Navbar;

