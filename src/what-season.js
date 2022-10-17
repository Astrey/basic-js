const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (typeof date.getMonth != 'function' || Object.keys(date).length !== 0) {
    console.log('Invalid date!')
    throw new Error('Invalid date!');
  }
  console.log(date);
  let month = date.getMonth();
  console.log(month);

  if (month >=2 && month <=4)  {return 'spring'}
  if (month >=5 && month <=7)  {return 'summer'}
  if (month >=8 && month <=10)  {return 'autumn'}
  if (month <=1 || month == 11)  {return 'winter'}


}

console.log(getSeason(new Date(2020, 01, 20)))

module.exports = {
  getSeason
};
