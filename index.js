const contactsFunc = require("./contacts");
const argv = require("yargs").argv;


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const contacts = await contactsFunc.listContacts()
          console.table(contacts)
      break;

    case "get":
          const contact = await contactsFunc.getContactById(id)
          console.table(contact)
      break;

    case "add":
          const contactsAdd = await contactsFunc.addContact(name, email, phone)
          console.table(contactsAdd)
      break;

    case "remove":
          const contactsRemove = await contactsFunc.removeContact(id)
          console.table(contactsRemove)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);




