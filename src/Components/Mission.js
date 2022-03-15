import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JoinMission } from '../Redux/missions/Mission';

const Mission = (props) => {
  const { missionInfo } = props;
  const dispatch = useDispatch();

  const Join = () => {
    dispatch(JoinMission(missionInfo.id));
  };

  return (
    <tr>
      <td className="mission-name"><h3>{missionInfo.name}</h3></td>
      <td className="mission-description"><p>{missionInfo.description}</p></td>
      <td className="mission-status">
        {
          (missionInfo.joined)
            ? <h5 className="Active-member">Active Member</h5>
            : <h5 className="Not-A-member">NOT A MEMBER</h5>
        }
      </td>
      <td>
        {
          (missionInfo.joined)
            ? <button type="button" className="leave-mission-btn" onClick={Join}> Leave Mission </button>
            : <button type="button" className="join-mission-btn" onClick={Join}> Join Mission </button>
        }
      </td>
    </tr>
  );
};

Mission.propTypes = {
  missionInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
