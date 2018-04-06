import React from 'react';
import reactDOM from 'react-dom';

const Confirmation = ({ name, summaryData, toggleLinkClick }) => {
  console.log(name, summaryData)
  if (!name || !summaryData) {
    return (
      <div>Loading confirmation...</div>
    )
  }
  else {
    return (
    <div>
      <h1>Confirmed! Enjoy your item!</h1>
      <div>Name: {name}</div>
      <div>E-mail: {summaryData.email}</div>
      <div>Address: {summaryData.address}</div>
      <div>Card Number: ************{summaryData.cardNumber.slice(12, 16)}</div>
      <div>Expiration Date: {summaryData.expirationDate}</div>
      <div>Billing Zip: {summaryData.billingZip}</div>
    <button onClick={() => {toggleLinkClick('confirmation', name)}}>Go back</button>
    </div>
    )
  }
}

module.exports = Confirmation