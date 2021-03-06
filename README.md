# Revisiting Objects

## Required Tasks

- Write an object with field name.

```javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
```

[solution](https://github.com/Gayane25/Getter-Setter-Property-Descriptor/blob/master/getSet.js)

- The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

```javascript
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33
```

[solution](https://github.com/Gayane25/Getter-Setter-Property-Descriptor/blob/master/getBestStudent.js)

# Date tasks

- Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".

To illustrate, the day of the week for "12/07/2016" is "Wednesday".

- This challenge assumes the week starts on Sunday.\*

| Input                | Output      |
| -------------------- | ----------- |
| getDay("12/07/2016") | "Wednesday" |
| getDay("09/04/2016") | "Sunday"    |
| getDay("12/08/2011") | "Thursday"  |

[solution](https://github.com/Gayane25/Getter-Setter-Property-Descriptor/blob/master/getWeek.js)

- Implement following function

```javascript
const formatDate = date => {
  return date;
};

console.log('Actual output: ', formatDate(new Date('2020-05-14')));
console.log('Expected output', '14 May 2020');
```

[solution](https://github.com/Gayane25/Getter-Setter-Property-Descriptor/blob/master/formatDate.js)
