import { driverList } from "../global/index.mjs";

/**
 * Sets up a new delivery by adding it to the driver list.
 * @param {DeliveryDriver} newDeliveryDriver - The new delivery driver object to be added.
 */
const deliverySetup = (newDeliveryDriver) => {
  driverList.push(newDeliveryDriver);
  console.log(driverList);
};

export default deliverySetup;
