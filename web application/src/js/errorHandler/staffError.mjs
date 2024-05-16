/**
 * Handles errors that occur while fetching staff data.
 * Displays an error message and provides a refresh button.
 * @param {Error} error - The error object.
 */
const errorStaffHandler = (error) => {
  if (error) {
    const errorContainer = document.querySelector(".error-container");

    errorContainer.classList.add("d-flex");
    errorContainer.innerHTML = `
     <h2>Error</h2>
          <p>
            We're sorry! There seems to be some issues loading the staff, please refresh the
            page
          </p>
          <button class="px-4 refresh-button">Refresh</button>
          <p class="mt-2">Or try again at a later time</p>`;

    const refreshBtn = document.querySelector(".refresh-button");
    refreshBtn.addEventListener("click", () => {
      window.location.reload();
    });
  } else {
    errorContainer.classList.remove("d-flex");
    errorContainer.innerHTML = "";
  }
};

export default errorStaffHandler;
