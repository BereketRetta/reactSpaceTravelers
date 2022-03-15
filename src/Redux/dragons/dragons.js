import dragonsAPI from '../../Components/GetDragons';

const GET_DRAGONS = 'spaceX/dragons/GET_DRAGONS';
const RESERVE_DRAGONS = 'spaceX/dragons/RESERVE_DRAGONS';
const CANCEL_DRAGONS_RESERVE = 'spaceX/dragons/CANCEL_DRAGONS';
const initialState = [];

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.payload;
    case RESERVE_DRAGONS: {
      const updateState = state.map((dragon) => (dragon.id !== action.payload
        ? dragon
        : { ...dragon, reserved: true }));
      return updateState;
    }
    case CANCEL_DRAGONS_RESERVE: {
      const updateState = state.map((dragon) => (dragon.id !== action.payload
        ? dragon
        : { ...dragon, reserved: false }));
      return updateState;
    }
    default:
      return state;
  }
};

const getDragonAction = (payload) => ({
  type: GET_DRAGONS,
  payload,
});

export const getDragons = () => (dispatch) => {
  dragonsAPI.getDragons().then((res) => {
    dispatch(
      getDragonAction(
        res.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          type: dragon.type,
          flickr_images: dragon.flickr_images[0],
        })),
      ),
    );
  });
};

export const reserveDragons = (payload) => ({
  type: RESERVE_DRAGONS,
  payload,
});

export const cancelDragons = (payload) => ({
  type: CANCEL_DRAGONS_RESERVE,
  payload,
});

export default dragonsReducer;
