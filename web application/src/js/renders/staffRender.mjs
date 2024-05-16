import Employee from "../classes/employee.mjs";
import StaffMember from "../classes/staffMember.mjs";

/**
 * Renders staff members data to the relevant function that generates dynamic HTML.
 * @param {object} staff - The staff data object containing information about staff members.
 * The staff object should have a 'results' property which is an array of staff member objects,
 * each containing 'name', 'picture', and 'email' properties.
 */
const staffRender = (staff) => {
  console.log(staff);
  staff.results.forEach(({ name, picture, email }) => {
    const { first, last } = name;
    const { large } = picture;
    const newStaffMember = new StaffMember(first, last, large, email);
    newStaffMember.TableTemplate();
  });
};
export default staffRender;
