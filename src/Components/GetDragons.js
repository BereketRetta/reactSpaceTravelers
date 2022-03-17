const dragonsAPI = {
  getDragons() {
    const dragons = fetch('https://api.spacexdata.com/v3/dragons')
      .then((res) => res.json())
      .then((response) => response);
    return dragons;
  },
};

export default dragonsAPI;
