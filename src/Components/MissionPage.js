import React, { useEffect, useState } from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import { getMissions } from '../Redux/missions/Mission';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const [Load, setLoad] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      setLoad(true);
      dispatch(getMissions());
      setTimeout(() => {
        setLoad(false);
      }, 3000);
    }
  }, []);
  return (
    <table className="main-table">
      <thead>
        <tr>
          <td className="mission-d">Mission</td>
          <td className="mission-D">Description</td>
          <td className="mission-S">Status</td>
          <td className="join-mission" />
        </tr>
      </thead>
      <tbody>
        {
        missions.map((mission) => (<Mission load={Load} key={mission.id} missionInfo={mission} />))
        }
      </tbody>
    </table>
  );
};

export default Missions;
