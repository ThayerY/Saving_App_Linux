import { apiUrl } from './config.js';
// import { amountInputEl } from './domElements.js';
import { getAmountInputEl } from './domElements.js'
import { fetchSavings } from './fetchSavings.js';



export const addAmount = async () => {
  const amount = parseFloat(amountInputEl.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    if (response.ok) {
      await fetchSavings();
      amountInputEl.value = "";
    } else {
      alert("Failed to add amount.");
    }
  } catch (error) {
    console.error("Error adding amount:", error);
    alert("Error adding amount.");
  }
};





//-------------------------------------------------------------------------------
//--------------------------------------------------------------------------------







// // added to this code comma seprate digits and the only allowd digits adding no letters


// import { apiUrl } from './config.js';
// import { amountInputEl } from './domElements.js';
// import { fetchSavings } from './fetchSavings.js';

// // Restrict input to only digits and one decimal point (if needed)
// amountInputEl.addEventListener('input', () => {
//   const currentValue = amountInputEl.value;

//   // Remove all characters except digits and decimal point
//   let sanitizedValue = currentValue.replace(/[^0-9.]/g, '');

//   // Allow only one decimal point
//   const firstDecimalIndex = sanitizedValue.indexOf('.');
//   if (firstDecimalIndex !== -1) {
//     const secondDecimalIndex = sanitizedValue.indexOf('.', firstDecimalIndex + 1);
//     if (secondDecimalIndex !== -1) {
//       // Remove subsequent decimal points
//       sanitizedValue = sanitizedValue.substring(0, secondDecimalIndex) + sanitizedValue.substring(secondDecimalIndex + 1);
//     }
//   }

//   // Update the input value if it differs from the sanitized value
//   if (sanitizedValue !== currentValue) {
//     amountInputEl.value = sanitizedValue;
//   }
// });

// // Add formatting on blur event
// amountInputEl.addEventListener('blur', () => {
//   const rawValue = amountInputEl.value.replace(/,/g, '');
//   const numericValue = parseFloat(rawValue);

//   if (!isNaN(numericValue)) {
//     amountInputEl.value = numericValue.toLocaleString();
//   } else {
//     amountInputEl.value = '';
//   }
// });

// export const addAmount = async () => {
//   // Convert from formatted value to pure number before sending
//   const amount = parseFloat(amountInputEl.value.replace(/,/g, ''));

//   if (isNaN(amount) || amount <= 0) {
//     alert("Please enter a valid amount.");
//     return;
//   }

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount }),
//     });

//     if (response.ok) {
//       await fetchSavings();
//       amountInputEl.value = '';
//     } else {
//       alert("Failed to add amount.");
//     }
//   } catch (error) {
//     console.error("Error adding amount:", error);
//     alert("Error adding amount.");
//   }
// };
