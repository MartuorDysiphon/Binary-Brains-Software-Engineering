import React from 'react';

const VideoItem = ({ title, description, videoId }) => {
  const cleanVideoId = videoId?.split('?')[0];
  
  return (
    <div className="video-item">
      <div className="video-wrapper">
        {cleanVideoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${cleanVideoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#f0f0f0', color: '#c41e3a' }}>
            <p>Video ready soon</p>
          </div>
        )}
      </div>
      <div className="video-caption">
        <i className="fas fa-comment-dots"></i> {description}
      </div>
    </div>
  );
};

export default VideoItem;