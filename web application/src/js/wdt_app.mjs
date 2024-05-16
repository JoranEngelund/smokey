import digitalClock from "./digitalClock/index.mjs";
import addDelivery from "./eventListeners/addDelivery.mjs";
import staffSetup from "./setup/staffSetup.mjs";

// Call the staffSetup function to initialize the staff display to the app.
try {
  staffSetup();
} catch (error) {}
try {
  addDelivery();
} catch (error) {}
try {
  digitalClock();
} catch (error) {}
