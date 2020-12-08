// @ts-check

// BEGIN (write your solution here)
const isHex = (h) => {
  const hex = Number(`0x${h}`);
  return h.length <= 4 && !(Number.isNaN(hex));
};

const isValidIPv6 = (ip) => {
  if (ip.indexOf('::') !== ip.lastIndexOf('::')) {
    return false;
  }
  const isShort = ip.includes('::');
  const doubleColonGroups = ip.split('::').filter((group) => group !== '');
  const groups = doubleColonGroups.flatMap((part) => part.split(':'));
  const length = isShort ? groups.length + 2 : groups.length;

  if ((!isShort && length < 8) || length > 8) {
    return false;
  }
  return groups.every(isHex);
};

export default (isValidIPv6);

/* validator.js
Реализуйте функцию-предикат isValidIPv6(), которая проверяет IPv6-адреса
(адреса шестой версии интернет протокола) на корректность.
Функция принимает на вход строку с адресом IPv6 и возвращает true,
если адрес корректный, а в противном случае false. Экспортируйте функцию по умолчанию.

Дополнительные условия:

Работа функции не зависит от регистра символов.
Ведущие нули в группах цифр необязательны.
Самая длинная последовательность групп нулей, например,
:0:0:0: может быть заменена на два двоеточия ::. Такую замену можно произвести только один раз.
Одна группа нулей :0: не может быть заменена на ::.

Примеры
isValidIPv6('10:d3:2d06:24:400c:5ee0:be:3d'); // true
isValidIPv6('0B0:0F09:7f05:e2F3:0D:0:e0:7000'); // true
isValidIPv6('000::B36:3C:00F0:7:937'); // true
isValidIPv6('::1'); // true

isValidIPv6('2607:G8B0:4010:801::1004'); // false
isValidIPv6('1001:208:67:4f00:e3::2c6:0'); // false
isValidIPv6('2.001::'); // false
isValidIPv6('9f8:0:69S0:9:9:d9a:672:f90d'); // false */
