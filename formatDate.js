'use strict';
// implement date format

const formatDate = stringDate => {
  let date = new Date(stringDate);
  const MONTHS = [
    'january',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let day = date.getDate();
  let month = date.getMonth();
  let fullYear = date.getFullYear();
  return `${day} ${MONTHS[month]} ${fullYear}`;
};

console.log(formatDate('1995-05-21'));
