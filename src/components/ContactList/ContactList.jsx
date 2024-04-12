import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filtersSlice";

export default function ContactList({ onDelete }) {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contact}>
            <Contact item={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
