import { driverList, driverStates } from "../global/index.mjs";
import deliveryBoardTemplate from "../templates/deliveryTemplate/deliveryBoard.mjs";
import deliveryIsLateToast from "../templates/deliveryTemplate/deliveryIsLateNotif.mjs";
import Employee from "./employee.mjs";

/**
 * Represents a delivery driver, extending the Employee class.
 * @constructor Creates a new DeliveryDriver instance.
 * @param {string} name - The name of the delivery driver.
 * @param {string} surname - The surname of the delivery driver.
 * @param {string} vehicle - The vehicle used for delivery.
 * @param {string} telephone - The telephone number of the delivery driver.
 * @param {string} deliveryAddress - The delivery address.
 * @param {string} returnTime - The expected return time for the delivery
 * @method deliveryTemplate - Renders delivery information on the delivery board.
 * @method deliveryDriverIsLate -  Checks if delivery drivers are late and displays a notification toast for each late driver.
 * @returns {void}
 */
class DeliveryDriver extends Employee {
  constructor(
    name,
    surname,
    vehicle,
    telephone,
    deliveryAddress,
    returnTime,
    id
  ) {
    super(name, surname);
    this.vehicle = vehicle;
    this.telephone = telephone;
    this.deliveryAddress = deliveryAddress;
    this.returnTime = returnTime;
    this.id = id;
  }

  deliveryTemplate() {
    return deliveryBoardTemplate(
      this.name,
      this.surname,
      this.vehicle,
      this.telephone,
      this.deliveryAddress,
      this.returnTime
    );
  }

  deliveryDriverIsLate() {
    setInterval(() => {
      driverList.forEach(({ returnTime, id }) => {
        const convertedReturnTime = returnTime.toLocaleString();
        const toastNotif = document.querySelector("#delivery-is-late");

        if (id === id) {
          const now = new Date().toLocaleTimeString();
          if (now > convertedReturnTime && !driverStates[name]) {
            const toastBootstrap =
              bootstrap.Toast.getOrCreateInstance(toastNotif);
            toastBootstrap.show();
            deliveryIsLateToast(
              name,
              this.surname,
              this.deliveryAddress,
              this.telephone,
              returnTime
            );

            driverStates[name] = true;
            console.log(driverStates);
          }
        }
      });
    }, 1000);
  }
}

export default DeliveryDriver;
