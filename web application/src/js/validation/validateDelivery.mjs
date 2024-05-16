/**
 * Validates the delivery information.
 * @param {string} name - The name of the recipient.
 * @param {string} surname - The surname of the recipient.
 * @param {string} telephone - The telephone number of the recipient.
 * @param {string} address - The delivery address.
 * @param {string} returnTime - The return time for the delivery.
 * @returns {boolean} - True if all fields are validated, false otherwise.
 */
const validateDelivery = (name, surname, telephone, address, returnTime) => {
  let nameValidated = false;
  let surnameValidated = false;
  let telephoneValidated = false;
  let addressValidated = false;
  let returnTimeValidated = false;

  const validationContainer = document.querySelector("#validationContainer");
  const phoneError = document.querySelector("#phone-error");
  validationContainer.innerHTML += `<i class="bi bi-x-circle mt-0"></i> <p>These fields are required:  </p>`;

  if (typeof name === "string" && name.trim() !== "") {
    nameValidated = true;
  } else {
    validationContainer.innerHTML += `<p> Name</p>`;
  }

  if (typeof surname === "string" && surname.trim() !== "") {
    surnameValidated = true;
  } else {
    validationContainer.innerHTML += `<p>Surname</p>`;
  }

  if (telephone.length >= 7) {
    telephoneValidated = true;
    phoneError.innerHTML = ``;
  } else {
    telephoneValidated = false;
    validationContainer.innerHTML += `<div><p>Telephone</p>
    <i>Telephone needs to be at least 7 digits</i></div>`;
    phoneError.innerHTML = `Telephone needs to be at least 7 digits`;
  }

  if (typeof address === "string" && address.trim() !== "") {
    addressValidated = true;
  } else {
    validationContainer.innerHTML += `<p>Address</p>`;
  }

  const now = new Date().toLocaleTimeString();
  if (
    typeof returnTime === "string" &&
    /^([01]\d|2[0-3]):([0-5]\d)$/.test(returnTime) &&
    returnTime >= now
  ) {
    returnTimeValidated = true;
  } else {
    validationContainer.innerHTML += `<p>Return Time</p>`;
  }

  const allFieldsValidated =
    nameValidated &&
    surnameValidated &&
    telephoneValidated &&
    addressValidated &&
    returnTimeValidated;

  if (allFieldsValidated) {
    validationContainer.innerHTML = `
    <i class="bi bi-check2-circle"></i>
    <h3>Delivery for ${returnTime} added!</h3>
    `;
  } else {
  }

  return allFieldsValidated;
};

export default validateDelivery;
