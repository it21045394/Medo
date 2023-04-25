import {round} from 'lodash'

export const formatMoney= (num: number, prefix: string) => {
  const converted = num.toString();
  const number_string = converted.replace(/[^,\d]/g, '').toString();
  const split = number_string.split(',');
  const  remainder = split[0].length % 3;
  let money = split[0].substr(0, remainder);
  const spec = split[0].substr(remainder).match(/\d{3}/gi);

  if(spec){
    const separator = remainder ? '.' : '';
    money += separator + spec.join('.');
  }

  money = split[1] != undefined
      ? `${money}, ${split[1]}`
      : money;

  if (!prefix) return '';
  if (!money) return '';

  return `LKR. ${round(parseFloat(money),2)}`;


}