// import { fetchSavings } from './fetchSavings.js';
// import { addAmount } from './addAmount.js';
// import { subtractAmount } from './subtractAmount.js';
// import { addAmountBtn, subtractAmountBtn } from './domElements.js';

// document.addEventListener('DOMContentLoaded', () => {
//   // Initial fetch of data
//   fetchSavings();

//   // Set up event listeners for adding/subtracting amounts
//   addAmountBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     addAmount();
//   });

//   subtractAmountBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     subtractAmount();
//   });
// });






//---------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------



//  //  this edit today

import { fetchSavings } from './fetchSavings.js';
import { addAmount } from './addAmount.js';
import { subtractAmount } from './subtractAmount.js';
import {getAddAmountBtn,getSubtractAmountBtn} from './domElements.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initial fetch of data
  fetchSavings();

  // Get DOM elements inside DOMContentLoaded
  const addBtn = getAddAmountBtn();
  const subtractBtn = getSubtractAmountBtn();

  // Set up event listeners
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addAmount();
  });

  subtractBtn.addEventListener("click", (event) => {
    event.preventDefault();
    subtractAmount();
  });
});
