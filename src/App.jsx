import React, { useEffect, useState } from 'react';
import './App.css';

import logo from './assets/logo/logo.png';

import amaphianoDance from './assets/dance/piano.jpg';
import hipHopDance from './assets/dance/hiphop.jpg';
import spiritualDance from './assets/dance/spiritual.jpg';

import projectManager from './assets/team/members/bnikani.jpeg';
import riskManager from './assets/team/members/llekhoaba.jpeg';
import communicationsOfficer from './assets/team/members/tlebeko.jpeg';
import contentDirector from './assets/team/members/kpkhiba.jpeg';
import technicalLead from './assets/team/members/kjmorwamohube.jpg';
import financialController from './assets/team/members/kj ramotete.jpeg';

const Navigation = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="glass-nav">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo-block">
            <img src={logo} alt="Binary Brains logo" className="logo-img" />
          </div>
          <div className="nav-links">
            <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#home')}>
               Home
            </button>
            <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#dances')}>
               Dances
            </button>
            <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#multimedia')}>
               Stories
            </button>
            <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#team')}>
               Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-drum"></i>
          <span>Mangaung Dance Performances 2026</span>
          <i className="fas fa-feather-alt"></i>
        </div>
        <h1><span>Mangaung</span> Tradition in motion. Future in focus.</h1>
        <p>Three sacred dances, exclusive interviews, and the living pulse of Bloemfontein. Binary Brains presents an immersive digital archive of movement, memory and innovation.</p>
        <div className="hero-meta">
          <span><i className="fas fa-calendar-alt"></i> Due 24.04.2026</span>
          <span><i className="fas fa-users"></i> 6 minds · 1 vision</span>
        </div>
      </div>
    </section>
  );
};

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
          <img 
            src={displayImage} 
            alt={title}
          />
        ) : (
          videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
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

const DancesSection = () => {
  const danceData = [
    {
      title: 'Amapiano',
      image: amaphianoDance,
      videoId: 'dQw4w9WgXcQ',
      details: [
        { icon: 'fas fa-history', text: 'Origins: Early 2010s, South African townships (Gauteng – Pretoria & Johannesburg)' },
        { icon: 'fas fa-hand-sparkles', text: 'Cultural role: Social dance in clubs, street culture, youth identity & lifestyle' },
        { icon: 'fas fa-drum', text: 'Artistic: Smooth footwork (Pitori style), log drum beats, relaxed groove & expressive moves' }
      ]
    },
    {
      title: 'Hip-Hop Dance',
      image: hipHopDance,
      videoId: 'dQw4w9WgXcQ',
      details: [
        { icon: 'fas fa-city', text: 'Origins: 1970s, Bronx, New York City (USA), within hip-hop culture' },
        { icon: 'fas fa-chalkboard-user', text: 'Cultural role: Self-expression, battles, youth empowerment & storytelling' },
        { icon: 'fas fa-head-side-headphones', text: 'Artistic: Breaking, popping, locking, freestyle movement to hip-hop beats' }
      ]
    },
    {
      title: 'Spiritual Dance',
      image: spiritualDance,
      videoId: 'dQw4w9WgXcQ',
      details: [
        { icon: 'fas fa-landmark', text: 'Origins: Indigenous African traditions, practiced for centuries in various ethnic groups' },
        { icon: 'fas fa-hands-helping', text: 'Cultural role: Rituals, ancestral communication, initiation ceremonies & community bonding' },
        { icon: 'fas fa-bell', text: 'Artistic: Drumming, chanting, call-and-response, symbolic dress (beads, skins, rattles)' }
      ]
    }
  ];

  return (
    <section id="dances">
      <div className="section-header">
        <h2><i className="fas fa-shoe-prints"></i> Three living dances of Mangaung</h2>
        <i className="fas fa-arrow-right"></i>
      </div>
      <div className="dance-grid">
        {danceData.map((dance, idx) => (
          <DanceCard key={idx} {...dance} />
        ))}
      </div>
    </section>
  );
};

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

const TeamMember = ({ name, role, studentId, image }) => {
  return (
    <div className="member-tile">
      <img src={image} className="member-photo" alt={name} />
      <h4>{name}</h4>
      <div className="member-role">{role}</div>
      <div className="student-id">{studentId}</div>
    </div>
  );
};

const TeamSection = () => {
  const members = [
    { name: 'B. Nikani', role: 'Project Manager', studentId: '224109373', image: projectManager },
    { name: 'L.E. Lekhoba', role: 'Risk Manager', studentId: '221035310', image: riskManager },
    { name: 'T. Lebeko', role: 'Communications Officer', studentId: '223073835', image: communicationsOfficer },
    { name: 'S.P. Khiba', role: 'Content Director', studentId: '221026123', image: contentDirector },
    { name: 'K.J. Morwamohube', role: 'Technical Lead', studentId: '221039026', image: technicalLead },
    { name: 'K.J. Ramotete', role: 'Financial Controller', studentId: '222055729', image: financialController }
  ];

  return (
    <section id="team">
      <div className="section-header">
        <h2><i className="fas fa-brain"></i> Binary Brains — Meet the six brains</h2>
        <i className="fas fa-code-branch"></i>
      </div>
      <div className="team-grid">
        {members.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
      <div className="group-photo-container">
        <i className="fas fa-camera-retro"></i> Binary Brains — fieldwork in Mangaung, April 2026
        <div className="group-photo-wrapper">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop" alt="Binary Brains team" className="group-photo" />
        </div>
        <p className="group-photo-caption">
          <i className="fas fa-map-marker-alt"></i> Stakeholder engagement: Mangaung cultural forum, local dance troupes, oral historians
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-youtube"></i>
          <i className="fas fa-envelope"></i>
        </div>
        <p>© 2026 Binary Brains Software Engineering Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  useEffect(() => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
      document.head.appendChild(link);
    }
    if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Inter"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;500;600;700;800&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <div className="container">
        <DancesSection />
        <MultimediaSection />
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;