import errorStaffHandler from "../errorHandler/staffError.mjs";

/**
 * Fetches staff user data from the specified URL.
 * @param {string} url - The URL to fetch the data from.
 * @returns {Promise<object>} - A promise resolving to the JSON data of the staff user.
 */
const staffUserGet = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    errorStaffHandler(error);
    console.log(error);
  }
};

export default staffUserGet;
