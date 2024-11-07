// src/components/VideoSection.js
import React from 'react';

const VideoSection = () => {
  const videos = [
    "https://www.youtube.com/embed/ZQHqLW_i5XI", // Primer video en formato embed
    "https://www.youtube.com/embed/jaE2QqJStBw", // Segundo video en formato embed
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Videos del Curso de Confección</h2>
      <div style={styles.videoGrid}>
        {videos.map((videoUrl, index) => (
          <div key={index} style={styles.videoWrapper}>
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#1c1c1c',
    color: 'white',
    borderRadius: '10px',
    margin: '20px 0',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  videoGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  videoWrapper: {
    width: '100%',
    maxWidth: '320px',
    aspectRatio: '16/9',
    borderRadius: '8px',
    overflow: 'hidden',
  },
};

export default VideoSection;