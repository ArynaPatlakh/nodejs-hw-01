import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const newList = [];
  const removeContacts = writeContacts(newList);
  return removeContacts;
};

removeAllContacts();
