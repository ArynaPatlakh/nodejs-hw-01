import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const readContent = await readContacts();
  const newContact = createFakeContact();
  const newListContacts = [...readContent, newContact];
  return writeContacts(newListContacts);
};

addOneContact();
