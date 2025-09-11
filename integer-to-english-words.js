const LESS_THAN_20 = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
];
const TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const THOUSANDS = ['', 'Thousand', 'Million', 'Billion'];

/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = num => {
  if (num === 0) return 'Zero';

  let i = 0;
  let words = '';

  while (num > 0) {
    if (num % 1000 !== 0) words = helper(num % 1000) + THOUSANDS[i] + ' ' + words;
    num = Math.floor(num / 1000);
    i++;
  }

  return words.trim();
};

const helper = num => {
  if (num === 0) return '';
  else if (num < 20) return LESS_THAN_20[num] + ' ';
  else if (num < 100) return TENS[Math.floor(num / 10)] + ' ' + helper(num % 10);
  else return LESS_THAN_20[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
};
