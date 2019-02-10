const months = {
  'January': 'Jan',
  'February': 'Feb',
  'March': 'Mar',
  'April': 'Apr',
  'May': 'May',
  'June': 'Jun',
  'July': 'Jul',
  'August': 'Aug',
  'September': 'Sep',
  'October': 'Oct',
  'November': 'Nov',
  'December': 'Dec'
};

const formatDate = (html, index, $) => {
  let date = $('.entry-date', html)[index].children[0].data;
  const month = date.split(' ')[0];

  let day = date.split(' ')[1].replace(',', '');
  if (day.length === 1) day = `0${day}`;
  
  date = date.split(' ');
  date.splice(1, 1, `${day},`);
  date = date.join(' ');

  return date.replace(month, months[month]);
};

module.exports = formatDate;