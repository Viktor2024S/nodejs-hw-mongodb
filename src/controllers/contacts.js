import { listContacts, getContactById } from '../services/contacts.js';

export const getContactsController = async (req, res) => {
  const contacts = await listContacts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  // if (!contact) {
  //   res.status(404).json({
  //     status: 404,
  //     message: 'Contact not found',
  //   });
  //   return;
  // }
  if (!contact) {
    next(new Error(`Contact with id ${contactId} not found`));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
