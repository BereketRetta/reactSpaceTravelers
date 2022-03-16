import React from 'react';
import { useSelector } from 'react-redux';
import JoinedMissions from './JoinedMissions';

export default function MyProfile() {
  const rocketsName = useSelector((state) => state.rockets);
  const reservedRockets = rocketsName.filter((rocket) => rocket.reserved);
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  return (
    <div className="profile-c">
      <div className="my-mission">
        <h2>My Missions</h2>
        <JoinedMissions />
      </div>
      <div className="my-rockets">
        <h2>My Rockets</h2>
        <ul className="rocket-profile">
          {reservedRockets.map((rocket) => (
            <li className="rocket-name" key={rocket.id}><h3>{rocket.name}</h3></li>
          ))}
        </ul>
      </div>
      <div className="my-dragons">
        <h2>My Dragons</h2>
        <ul className="dragons-profile">
          {reservedDragons.map((dragon) => (
            <li className="dragon-name" key={dragon.id}><h3>{dragon.name}</h3></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
