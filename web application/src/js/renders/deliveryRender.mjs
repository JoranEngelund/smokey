import DeliveryDriver from "../classes/deliveryDriver.mjs";
import clearDelivery from "../eventListeners/clearDelivery.mjs";
import { id } from "../global/index.mjs";
import deliverySetup from "../setup/deliverySetup.mjs";
import validateDelivery from "../validation/validateDelivery.mjs";

/**
 * Renders a new delivery with the provided delivery data and vehicle information.
 * @param {object} deliveryData - The data for the delivery, including name, surname, telephone, address, and return time.
 * @param {string} vehicle - The vehicle used for the delivery.
 * @returns {boolean} - True if the delivery data is validated and the delivery is set up successfully, false otherwise.
 */
const deliveryRender = (deliveryData, vehicle) => {
  const { name, surname, telephone, address, returnTime } = deliveryData;
  const validated = validateDelivery(
    name,
    surname,
    telephone,
    address,
    returnTime
  );
  if (validated) {
    const newDeliveryDriver = new DeliveryDriver(
      name,
      surname,
      vehicle,
      telephone,
      address,
      returnTime,
      id
    );
    deliverySetup(newDeliveryDriver);
    newDeliveryDriver.deliveryTemplate();
    clearDelivery(newDeliveryDriver);
    newDeliveryDriver.deliveryDriverIsLate();
  }
  return validated;
};
export default deliveryRender;
