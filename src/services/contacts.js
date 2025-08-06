import { contactsCollection } from '../db/models/contact.js';

export const listContacts = async () => {
  const contacts = await contactsCollection.find({});
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await contactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const newContact = await contactsCollection.create(payload);
  return newContact;
};
