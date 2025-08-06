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

export const deleteContact = async (contactId) => {
  const deleteContact = await contactsCollection.findOneAndDelete({
    _id: contactId,
  });
  return deleteContact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const updateContact = await contactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!updateContact || !updateContact.value) {
    return null;
  }

  return {
    student: updateContact.value,
    isNew: Boolean(updateContact?.lastErrorObject?.upserted),
  };
};
