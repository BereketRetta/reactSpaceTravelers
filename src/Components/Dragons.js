import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons, reserveDragons, cancelDragons } from '../Redux/dragons/dragons';

export default function Dragons() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getDragons());
    }
  }, []);

  return (
    <div className="dragon-c">
      {dragons.map((dragon) => (
        <ul key={dragon.id} className="dragon-list">
          <li>
            <img className="dragon-img" src={dragon.flickr_images} alt="rocket" />
          </li>
          <div className="dragon-info">
            <li><h3>{dragon.name}</h3></li>
            <p className="dragon-des">
              {dragon.reserved && (<span className="reserved-r">Reserved</span>)}
              {dragon.type}
            </p>

            {dragon.reserved && (
              <button
                type="button"
                className={!dragon.reserved === true ? 'reserve-btn' : 'cancel-btn'}
                onClick={() => dispatch(cancelDragons(dragon.id))}
              >
                {!dragon.reserved === true ? 'Reserved Dragon' : 'Cancel Reservation'}
              </button>
            )}
            {!dragon.reserved && (
            <button
              type="button"
              className={!dragon.reserved === true ? 'reserve-btn' : 'cancel-btn'}
              onClick={() => dispatch(reserveDragons(dragon.id))}
            >
              {!dragon.reserved === true ? 'Reserved Dragon' : 'Cancel Reservation'}
            </button>
            )}
          </div>
        </ul>
      ))}
    </div>
  );
}
