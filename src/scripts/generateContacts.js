import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  const readListContacts = await readContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  const updateContacts = [...readListContacts, ...newContacts];
  await writeContacts(updateContacts);
};
generateContacts(5);
