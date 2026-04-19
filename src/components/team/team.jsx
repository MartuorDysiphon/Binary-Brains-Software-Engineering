import React from 'react';
import './team.css';
import TeamMember from './TeamMember';
import groupPhoto from '../../assets/team/team.jpg';
import projectManager from '../../assets/team/members/bnikani.jpeg';
import riskManager from '../../assets/team/members/llekhoaba.jpeg';
import communicationsOfficer from '../../assets/team/members/tlebeko.jpeg';
import contentDirector from '../../assets/team/members/kpkhiba.jpeg';
import technicalLead from '../../assets/team/members/kjmorwamohube.jpg';
import financialController from '../../assets/team/members/kj ramotete.jpeg';

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
          <img src={groupPhoto} alt="Binary Brains team" className="group-photo" />
        </div>
        <p className="group-photo-caption">
          <i className="fas fa-map-marker-alt"></i> Stakeholder engagement: Mangaung cultural forum, local dance troupes, oral historians
        </p>
      </div>
    </section>
  );
};

export default TeamSection;