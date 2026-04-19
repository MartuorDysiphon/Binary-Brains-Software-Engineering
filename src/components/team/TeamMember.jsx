import React from 'react';

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

export default TeamMember;