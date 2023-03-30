const contactsFunc = require("./contacts");
const argv = require("yargs").argv;


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const contacts = await contactsFunc.listContacts()
          console.log(contacts)
      break;

    case "get":
          const contact = await contactsFunc.getContactById(id)
          console.log(contact)
      break;

    case "add":
          const contactsAdd = await contactsFunc.addContact(name, email, phone)
          console.log(contactsAdd)
      break;

    case "remove":
          const contactsRemove = await contactsFunc.removeContact(id)
          console.log(contactsRemove)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
