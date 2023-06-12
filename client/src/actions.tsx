const set = (data) => ({ type: "SET_OFFERS", payload: data });
const update = () => {
  console.log("hello, world!");
};

module.exports = {
  set,
  update,
};
