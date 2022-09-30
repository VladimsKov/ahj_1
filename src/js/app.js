// TODO: write code here

export default function demo(value) {
  if (typeof (value) === 'number' && value > 100) return `${value} больше, чем 100`;
  if (typeof (value) === 'number' && value <= 100) return `${value} не больше, чем 100`;
  return 'значение - не число';
}

// console.log(demo(40));
// console.log(demo(150));
