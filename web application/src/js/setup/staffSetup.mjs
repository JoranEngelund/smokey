import staffUserGet from "../api/staffUserGet.mjs";
import staffRender from "../renders/staffRender.mjs";

/**
 * Sets up the staff display by fetching staff data from a specified API endpoint and rendering it.
 */
const staffSetup = async () => {
  const results = await staffUserGet("https://randomuser.me/api/?results=5");
  staffRender(results);
};

export default staffSetup;
