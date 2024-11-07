// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import VideoSection from './components/VideoSection'; // Importa el nuevo componente
import Footer from './components/Footer';



import foto1 from './assets/3.jpeg';
import foto2 from './assets/two.jpeg';
import foto3 from './assets/ten.jpeg';
import foto4 from './assets/six.jpeg';

import foto6 from './assets/seven.jpeg';
import foto7 from './assets/one.jpeg';
import foto8 from './assets/four.jpeg';
import foto9 from './assets/five.jpeg';


import foto10 from './assets/ten.jpeg';
import foto11 from './assets/7.jpeg';
import foto12 from './assets/3.jpeg';
import foto13 from './assets/4.jpeg';

import foto14 from './assets/6.jpeg';
import foto15 from './assets/7.jpeg';
import foto16 from './assets/8.jpeg';
import foto17 from './assets/9.jpeg';

import foto18 from './assets/IMG-20241101-WA0003.jpg';
import foto19 from './assets/IMG-20241101-WA0004.jpg';
import foto20 from './assets/IMG-20241101-WA0005.jpg';
import foto21 from './assets/IMG-20241101-WA0006.jpg';
import foto22 from './assets/IMG-20241101-WA0007.jpg';
import foto23 from './assets/IMG-20241101-WA0008.jpg';
import foto24 from './assets/IMG-20241101-WA0009.jpg';
import foto25 from './assets/IMG-20241101-WA0010.jpg';
import foto26 from './assets/IMG-20241101-WA0014.jpg';
import foto27 from './assets/IMG-20241101-WA0013.jpg';
import foto28 from './assets/IMG-20241101-WA0012.jpg';
import foto29 from './assets/IMG-20241101-WA0011.jpg';

const App = () => {
  const images = [foto1, foto2, foto3, foto4,  foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13,  foto14, foto15, foto16, foto17,
    ];
   
    const images1 = [ foto18, foto19, foto20, foto21, foto22, foto23, foto24, foto25, foto26, foto27, foto28, foto29,
    ]; 



  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="Curso de Confección" images={images} />

      <VideoSection /> {/* Agrega el componente de videos aquí */}

      <Row title="Curso de crochet y dos agujas: " images={images1} />
      <Footer />
    </div>
  );
};

export default App;