import React from 'react';
import './team.css';
import TeamMember from './TeamMember';
import projectManager from '../../assets/team/members/bnikani.jpeg';
import riskManager from '../../assets/team/members/llekhoaba.jpeg';
import communicationsOfficer from '../../assets/team/members/tlebeko.jpeg';
import contentDirector from '../../assets/team/members/kpkhiba.jpeg';
import technicalLead from '../../assets/team/members/kjmorwamohube.jpg';
import financialController from '../../assets/team/members/kj ramotete.jpeg';

const TeamSection = () => {
  const members = [
    { name: 'B. Nikani', role: 'Project Manager', studentId: '221026123', image: projectManager },
    { name: 'L.E. Lekhoba', role: 'Risk Manager', studentId: '221035310', image: riskManager },
    { name: 'T. Lebeko', role: 'Communications Officer', studentId: '224109373', image: communicationsOfficer },
    { name: 'S.P. Khiba', role: 'Content Director', studentId: '223073835', image: contentDirector },
    { name: 'K.J. Morwamohube', role: 'Technical Lead', studentId: '221039026', image: technicalLead },
    { name: 'K.J. Ramotete', role: 'Financial Controller', studentId: '222055729', image: financialController }
  ];

  return (
    <section id="team">
      <div className="section-header">
        <h2><i className="fas fa-brain"></i>Meet the Six Binary Brains</h2>
        <i className="fas fa-code-branch"></i>
      </div>
      <div className="team-grid">
        {members.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;