/**
 * Generates a notification toast for a late delivery driver.
 * @param {string} name - The name of the delivery driver.
 * @param {string} surname - The surname of the delivery driver.
 * @param {string} address - The delivery address.
 * @param {string} telephone - The telephone number of the delivery driver.
 * @param {string} returnTime - The estimated return time of the delivery driver.
 */
const deliveryIsLateToast = (name, surname, address, telephone, returnTime) => {
  const toast = document.querySelector(".toast");
  toast.innerHTML = `
    <div class="toast-header">
              <strong class="me-auto">Delivery Driver Alert!</strong>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div class="toast-body"><p>Name: ${name} ${surname}</p>
            <p>Address: ${address}</p>
             <p>Telephone: ${telephone}</p>
             <b>Estimated return time: ${returnTime} </b></div>
    `;
};

export default deliveryIsLateToast;
