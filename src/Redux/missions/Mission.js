const JOIN_MISSION = 'JOIN_MISSION';
const GET_MISSIONS = 'GET_MISSIONS';

const initialState = [];

const JoinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const addMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

const MissionsData = (data) => data.map((mission) => ({
  id: mission.mission_id,
  name: mission.mission_name,
  description: mission.description,
  joined: false,
}));

const getMissions = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json())
    .then((data) => {
      const missions = MissionsData(data);
      dispatch(addMissions(missions));
    });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION: return state.map((mission) => {
      if (mission.id !== action.payload) return mission;
      return { ...mission, joined: !mission.joined };
    });
    case GET_MISSIONS: return action.payload;
    default: return state;
  }
};

export {
  JoinMission,
  getMissions,
  missionsReducer as default,
};
