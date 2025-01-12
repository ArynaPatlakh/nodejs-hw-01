import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const allListContacts = await readContacts();
   allListContacts.pop();
  return writeContacts(allListContacts);
};

removeLastContact();
