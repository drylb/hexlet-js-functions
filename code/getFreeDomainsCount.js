// @ts-check
import _ from 'lodash';
// import get from 'lodash/get';
const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];
const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];

// #VERSION 1

const getFreeDomainsCount = (emails) => {
  const mails = emails.map((mail) => mail.split('@'));
  const filter = mails.filter(([, domain]) => (freeEmailDomains.includes(domain)));
  const domains = filter.reduce((acc, [, domain]) => {
    if (!Object.prototype.hasOwnProperty.call(acc, domain)) {
      acc[domain] = 0;
    }
    acc[domain] += 1;
    return acc;
  }, {});
  return domains;
};

// #VERSION 2 WITH LODASH

const getFreeDomainsCount1 = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = _.get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

// console.log(getFreeDomainsCount1(emails));

const getFreeDomainsCount2 = (emails) => {
  const mails = emails.map((mail) => mail.split('@'));
  const filter = mails.filter(([, domain]) => (freeEmailDomains.includes(domain)));
  const domains = filter.reduce((acc, [, domain]) => {
    const count = _.get(acc, domain, 0) + 1;
    acc[domain] = count;
    return acc;
  }, {});
  return domains;
};
console.log(getFreeDomainsCount2(emails));
// BEGIN (write your solution here)

// END

/* emails.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов,
а возвращает количество емейлов, расположенных на каждом бесплатном домене.
Список бесплатных доменов хранится в константе freeEmailDomains.

Примеры
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

getFreeDomainsCount(emails);
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// }; */
