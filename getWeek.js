'use strict';
/*Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".*/

const getWeek = stringDate => {
  let date = new Date(stringDate);
  let day = date.getDay();
  const week = [
    'sunday',
    'monday',
    'thuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  return week[day];
};

console.log(getWeek('06,06,2020'));