const spaceXAPI = {
  getRockets() {
    const rockets = fetch('https://api.spacexdata.com/v3/rockets')
      .then((res) => res.json())
      .then((response) => response);
    return rockets;
  },
};

export default spaceXAPI;
