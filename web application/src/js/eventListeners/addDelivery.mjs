import deliveryRender from "../renders/deliveryRender.mjs";

/**
 * Adds a new delivery when the scheduled delivery form is submitted.
 * @returns {void}
 */
const addDelivery = () => {
  const addDeliveryForm = document.querySelector("#scheduled-delivery-form");

  addDeliveryForm.addEventListener("submit", (e) => {
    const validationContainer = document.querySelector("#validationContainer");
    validationContainer.innerHTML = "";
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
    const vehicle = document.querySelector(".form-select").value;
    const isValidated = deliveryRender(formObject, vehicle);
    if (isValidated) {
      addDeliveryForm.reset();
    }
  });
};

export default addDelivery;
