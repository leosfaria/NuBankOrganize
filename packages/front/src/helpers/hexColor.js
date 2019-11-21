const colors = [
  '#f3a683',
  '#f7d794',
  '#778beb',
  '#e77f67',
  '#cf6a87',
  '#f19066',
  '#f5cd79',
  '#546de5',
  '#e15f41',
  '#c44569',
  '#786fa6',
  '#f8a5c2',
  '#63cdda',
  '#ea8685',
  '#596275',
  '#574b90',
  '#f78fb3',
  '#3dc1d3',
  '#e66767',
  '#303952'
];

export const generateHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
export const getRandomHexColor = () => colors[Math.floor(Math.random() * (colors.length + 1))];
