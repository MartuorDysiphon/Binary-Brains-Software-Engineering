import React from 'react';
import './danceSelection.css';
import DanceCard from './DanceCard';
import amaphianoDance from '../../assets/dance/piano.jpg';
import hipHopDance from '../../assets/dance/hiphop.jpg';
import spiritualDance from '../../assets/dance/spiritual.jpg';

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
        {/* <i className="fas fa-arrow-right"></i> */}
      </div>
      <div className="dance-grid">
        {danceData.map((dance, idx) => (
          <DanceCard key={idx} {...dance} />
        ))}
      </div>
    </section>
  );
};

export default DancesSection;