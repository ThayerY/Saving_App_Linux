import { apiUrl } from './config.js';
// import { amountInputEl } from './domElements.js';
import { getAmountInputEl } from './domElements.js'
import { fetchSavings } from './fetchSavings.js';

export const subtractAmount = async () => {
  const amount = parseFloat(amountInputEl.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: -amount }),
    });

    if (response.ok) {
      await fetchSavings();
      amountInputEl.value = "";
    } else {
      alert("Failed to subtract amount.");
    }
  } catch (error) {
    console.error("Error subtracting amount:", error);
    alert("Error subtracting amount.");
  }
};






//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// added to this code comma seprate digits and the only allowd digits adding no letters


// import { apiUrl } from './config.js';
// import { amountInputEl } from './domElements.js';
// import { fetchSavings } from './fetchSavings.js';

// export const subtractAmount = async () => {
//   // Remove commas before parsing
//   const rawValue = amountInputEl.value.replace(/,/g, '');
//   const amount = parseFloat(rawValue);

//   if (isNaN(amount) || amount <= 0) {
//     alert("Please enter a valid amount.");
//     return;
//   }

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: -amount }), // sending a negative amount for subtraction
//     });

//     if (response.ok) {
//       await fetchSavings();
//       amountInputEl.value = "";
//     } else {
//       alert("Failed to subtract amount.");
//     }
//   } catch (error) {
//     console.error("Error subtracting amount:", error);
//     alert("Error subtracting amount.");
//   }
// };
