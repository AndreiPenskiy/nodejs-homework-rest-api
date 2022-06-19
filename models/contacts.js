const fs = require('fs/promises')
const contactsPath = require("./filePath");
const {v4} = require("uuid");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
}

const getContactById = async (id) => {
  const contacts = await getAll();
    const result = contacts.find(contact => contact.id === id);
    if (!result) {
        return null;
    }

    return result;
}

const updateContacts = async(contacts)=> {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

const removeContact = async (id) => {
  const contacts = await getAll();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1) {
        return null;
  };

    const [removeContact] = contacts.splice(idx, 1);
    await updateContacts(contacts);
    return removeContact;
}

const add = async (data) => {
    const contacts = await getAll();
    const newContact = { ...data, id: v4() };
    contacts.push(newContact);
    await updateContacts(contacts);
    if (!newContact) {
        return null;
    }
    return newContact;
};

const updateById = async(id, data)=> {
    const contacts = await getAll();
    const idx = contacts.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
  };
  
    contacts[idx] = {...data, id};
    await updateContacts(contacts);
    return contacts[idx];
}

module.exports = {
  getAll,
  getContactById,
  removeContact,
  add,
  updateById,
}
