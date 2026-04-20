import React, { useState } from 'react';
import amaphianoDance from '../../assets/dance/piano.jpg';
import hipHopDance from '../../assets/dance/hiphop.jpg';
import spiritualDance from '../../assets/dance/spiritual.jpg';

const DanceCard = ({ title, image, details, videoId }) => {
  const [showVideo, setShowVideo] = useState(false);

  const fallbackImages = {
    'Amapiano': amaphianoDance,
    'Hip-Hop Dance': hipHopDance,
    'Spiritual Dance': spiritualDance
  };

  const displayImage = image || fallbackImages[title];

  return (
    <div className="dance-card">
      <div className="card-media">
        {!showVideo ? (
          <img src={displayImage} alt={title} />
        ) : (
          videoId ? (
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#f0f0f0', color: '#c41e3a' }}>
              <p>Video coming soon</p>
            </div>
          )
        )}
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        {details.map((detail, idx) => (
          <div className="detail-line" key={idx}>
            <i className={detail.icon}></i> {detail.text}
          </div>
        ))}
        <button className="watch-link" onClick={() => setShowVideo(!showVideo)}>
          <i className="fas fa-play-circle"></i> 
          {showVideo ? 'Hide video' : 'Watch dance'}
        </button>
      </div>
    </div>
  );
};

export default DanceCard;