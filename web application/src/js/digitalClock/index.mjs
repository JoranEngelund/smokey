/**
 * Displays a digital clock with the current date and time.
 * The clock updates every second.
 * @returns {void}
 */
const digitalClock = () => {
  setInterval(() => {
    const clock = document.querySelector("#digitalClock");
    const options = { month: "long", day: "numeric", year: "numeric" };
    const nowDate = new Date().toLocaleDateString(undefined, options);
    const nowTime = new Date().toLocaleTimeString();
    clock.innerHTML = `Date: ${nowDate}, Time: ${nowTime}`;
  }, 1000);
};

export default digitalClock;
