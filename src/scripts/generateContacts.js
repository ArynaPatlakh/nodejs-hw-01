import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const readListContacts = await readContacts();
  console.log('OLD contacts:', readListContacts);
  const newContacts = Array(number).fill(0).map(createFakeContact);
  console.log('NEW:', newContacts);
  const updateContacts = [...readListContacts, ...newContacts];
  console.log(updateContacts);
  await writeContacts(updateContacts);
};

generateContacts(5);
