import React from 'react';
import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.joined));
  return (
    <div className="myMissionsContainer">
      <ul className="mission-profile">
        {
          myMissions.map((mission) => (
            <li className="mission-prof-name" key={mission.id}>
              <h3>{mission.name}</h3>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default JoinedMissions;
