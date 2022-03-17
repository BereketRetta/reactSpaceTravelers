import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, reserveRockets, cancelRockets } from '../Redux/Rockets/rockets';

export default function Rocket() {
  const dispatch = useDispatch();
  const rocketNum = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketNum.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div className="rocket-c">
      {rocketNum.map((rocket) => (
        <ul key={rocket.id} className="rocket-list">
          <li>
            <img className="rocket-img" src={rocket.flickr_images} alt="rocket" />
          </li>
          <div className="rocket-info">
            <li><h3>{rocket.name}</h3></li>
            <p className="rocket-des">
              {rocket.reserved && (<span className="reserved-r">Reserved</span>)}
              {rocket.description}
            </p>
            {rocket.reserved && (
              <button
                type="button"
                className={!rocket.reserved === true ? 'reserve-btn' : 'cancel-btn'}
                onClick={() => dispatch(cancelRockets(rocket.id))}
              >
                {!rocket.reserved === true ? 'Reserved Rocket' : 'Cancel Reservation'}
              </button>
            )}

            {!rocket.reserved && (
              <button
                type="button"
                className={!rocket.reserved === true ? 'reserve-btn' : 'cancel-btn'}
                onClick={() => dispatch(reserveRockets(rocket.id))}
              >
                {!rocket.reserved === true ? 'Reserved Rocket' : 'Cancel Reservation'}
              </button>
            )}
          </div>
        </ul>
      ))}
    </div>
  );
}
