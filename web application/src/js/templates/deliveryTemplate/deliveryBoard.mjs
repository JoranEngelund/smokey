/**
 * Generates a template for displaying delivery information on a delivery board.
 * @param {string} name - The name of the driver.
 * @param {string} surname - The surname of the driver.
 * @param {string} vehicle - The vehicle used for delivery.
 * @param {string} telephone - The telephone number of the driver.
 * @param {string} address - The delivery address.
 * @param {string} returnTime - The expected return time for the delivery.
 * @returns {void}
 */
const deliveryBoardTemplate = (
  name,
  surname,
  vehicle,
  telephone,
  address,
  returnTime
) => {
  const deliveryTable = document.querySelector("#delivery-board");
  const row = document.createElement("tr");
  row.classList.add("tablerow-custom", "pointer-cursor", "delivery-row");
  row.setAttribute("id", name);

  row.innerHTML += `
  <td class="table-cell">${vehicle}</td>
    <td class="table-cell">${name}</td>
    <td class="table-cell">${surname}</td>
    <td class="table-cell">${telephone}</td>
    <td class="table-cell">${address}</td>
    <td class="table-cell">${returnTime}</td>
  `;

  deliveryTable.appendChild(row);
};

export default deliveryBoardTemplate;
