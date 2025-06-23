const cardPatterns = [
  { flag: 'Elo', regex: /^(4011|4312|4389|4514|4576|5041|5066|5067|5090|6277|6362|6363)/ },
  { flag: 'Visa', regex: /^4/ },
  { flag: 'MasterCard', regex: /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/ },
  { flag: 'American Express', regex: /^3[47]/ },
  { flag: 'Discover', regex: /^(6011|65|64[4-9])/ },
  { flag: 'Hipercard', regex: /^6062/ }
];

function getCardFlag(cardNumber) {
  const num = cardNumber.replace(/\D/g, '');
  for (const { flag, regex } of cardPatterns) {
    if (regex.test(num)) return flag;
  }
  return 'Unknown';
}

// Example usage:
console.log(getCardFlag('4111111111111111')); // Visa
console.log(getCardFlag('5500000000000004')); // MasterCard
console.log(getCardFlag('4011780000000000')); // Elo
console.log(getCardFlag('371449635398431'));  // American Express
console.log(getCardFlag('6011111111111117')); // Discover