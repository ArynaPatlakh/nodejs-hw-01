import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const allContacts = await readContacts();
  const countContacts = allContacts.length;
  return countContacts;
};

console.log(await countContacts());
