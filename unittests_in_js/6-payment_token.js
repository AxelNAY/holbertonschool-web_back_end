'use strict';

/**
 * getPaymentTokenFromAPI
 * @param {boolean} success
 * @returns {Promise<{data: string}>|undefined}
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;
