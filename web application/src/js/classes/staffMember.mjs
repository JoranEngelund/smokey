import staffTemplate from "../templates/staffTemplate/index.mjs";
import Employee from "./employee.mjs";

/**
 * Represents a staff member, inheriting from Employee.
 * @constructor
 * Create a staff member.
 * @param {string} name - The name of the staff member.
 * @param {string} surname - The surname of the staff member.
 * @param {string} picture - The picture URL of the staff member.
 * @param {string} email - The email of the staff member.
 * @param {string} status - The status of the staff member.
 * @param {string} outTime - The time the staff member went out.
 * @param {string} duration - The duration of absence.
 * @param {string} expectedReturnTime - The expected return time of the staff member.
 * @method TableTemplate
 * Generate a staff member template.
 * @returns {string} - The HTML template for the staff member.
 */
class StaffMember extends Employee {
  constructor(
    name,
    surname,
    picture,
    email,
    status,
    outTime,
    duration,
    expectedReturnTime
  ) {
    super(name, surname);
    this.picture = picture;
    this.email = email;
    this.status = status;
    this.outTime = outTime;
    this.duration = duration;
    this.expectedReturnTime = expectedReturnTime;
  }

  TableTemplate() {
    return staffTemplate(this.name, this.surname, this.picture, this.email);
  }
}

export default StaffMember;
