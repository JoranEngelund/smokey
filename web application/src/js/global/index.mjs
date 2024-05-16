let driverList = [];
let returnedDriverList = {
  returned: false,
};
let staffList = [];
let driverStates = {};
const generateRandomId = () => {
  let id = Math.random().toString(36).substr(2, 8);
  return id;
};
const id = generateRandomId();
export { driverList, staffList, driverStates, returnedDriverList, id };
