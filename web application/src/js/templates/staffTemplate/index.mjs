/**
 * Generates HTML template for displaying a staff member in a table.
 * @param {string} first - The first name of the staff member.
 * @param {string} last - The last name of the staff member.
 * @param {string} image - The URL of the staff member's image.
 * @param {string} email - The email address of the staff member.
 */
const staffTemplate = (first, last, image, email) => {
  console.log(image);
  const tableBody = document.querySelector("#table-body-staff");
  const row = document.createElement("tr");
  row.setAttribute("id", first);
  row.setAttribute("name", first);
  row.classList.add("tablerow-custom", "pointer-cursor", "row-active");

  row.innerHTML = `
    <td class="table-cell align-content-center" id="${first}">
                <img
                  src="${image}"
                  alt="image of ${first} ${last}"
                  title="${first} ${last}"
                  class="img-fluid mx-auto d-block custom-img"
                />
              </td>
              <td class="table-cell align-content-center text-center" id="${first}">${first}</td>
              <td class="table-cell align-content-center text-center" id="${first}" >${last}</td>
              <td class="table-cell align-content-center text-center" id="${first}">${email}</td>
              <td class="table-cell align-content-center text-center" id="${first}">Out</td>
              <td class="table-cell align-content-center text-center" id="${first}">
                5 minutes
              </td>
              <td class="table-cell align-content-center text-center" id="${first}">
                10 minutes
              </td>
              <td class="table-cell align-content-center text-center" id="${first}">14:43</td>`;

  tableBody.appendChild(row);
};

export default staffTemplate;
