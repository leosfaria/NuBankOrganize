export const money = value => {
  return value && 'R$ ' + parseFloat(value)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
};
