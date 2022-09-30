import demo from '../app';

test.each([
  [40, '40 не больше, чем 100'],
  [150, '150 больше, чем 100'],
  ['any string', 'значение - не число'],
])('demo test - demo(%s) expect (%s):', (input, expected) => {
  expect(demo(input)).toBe(expected);
});
