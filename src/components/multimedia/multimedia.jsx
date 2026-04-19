import React from 'react';
import './multimedia.css';
import VideoItem from './VideoItem';

const MultimediaSection = () => {
  const videos = [
    { title: 'Interview with Qhawe & Faith', description: 'Qhawe & Faith\'s Amapiano Interview by SP KHIBA', videoId: '6PMyHdZRIaM' },
    { title: 'Interview with Qhawe', description: 'Qhawe\'s Hip-Hop Dance Interview by SP KHIBA', videoId: 'HJbCdG4PFA8' },
    { title: 'Interview with Ms Candy', description: 'Ms Candy\'s Spiritual Dance Interview by T Lebeko', videoId: 'n7AYWPLoKVw' }
  ];

  return (
    <section id="multimedia">
      <div className="section-header">
        <h2><i className="fas fa-microphone-alt"></i> Interviews & dance narratives</h2>
        <i className="fas fa-camera"></i>
      </div>
      <p className="multimedia-intro">
        Real stakeholder engagement in Bloemfontein: conversations with cultural leaders, youth dancers, and community elders. Three immersive video capsules.
      </p>
      <div className="video-grid">
        {videos.map((video, idx) => (
          <VideoItem key={idx} {...video} />
        ))}
      </div>
      <div className="video-note">
        <i className="fas fa-check-circle"></i> All videos are available on our YouTube channel called "Binary Brains".
      </div>
    </section>
  );
};

export default MultimediaSection;