import { driverList, returnedDriverList } from "../global/index.mjs";

const clearDelivery = (newDeliveryDriver) => {
  const tableRows = document.querySelectorAll(".delivery-row");
  const clearBtn = document.querySelector("#clear-button");

  const handleRowClick = (row) => {
    row.setAttribute("data-selected", "true");
  };

  tableRows.forEach((row) => {
    row.addEventListener("click", () => {
      handleRowClick(row);
    });
  });

  clearBtn.addEventListener("click", () => {
    const selectedRows = document.querySelectorAll(
      '.delivery-row[data-selected="true"]'
    );
    selectedRows.forEach((row) => {
      const rowId = row.id;
      returnedDriverList.name = rowId;
      returnedDriverList.returned = true;
      console.log(returnedDriverList);
      const driverIndex = driverList.findIndex(
        (driver) => driver.name === rowId
      );
      if (driverIndex !== -1) {
        driverList.splice(driverIndex, 1);

        newDeliveryDriver = null;
        row.remove(); // Remove row from the DOM

        console.log(driverList);
      }
    });
  });
};

export default clearDelivery;
