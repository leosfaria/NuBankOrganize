const months = {
  'January': 'Janeiro',
  'February': 'Fevereiro',
  'March': 'Março',
  'April': 'Abril',
  'May': 'Maio',
  'June': 'Junho',
  'July': 'Julho',
  'August': 'Agosto',
  'September': 'Setembro',
  'October': 'Outubro',
  'November': 'Novembro',
  'December': 'Dezembro'
};

export const translateKey = key => `${months[key.split('-')[0]]}/${key.split('-')[1]}`;
