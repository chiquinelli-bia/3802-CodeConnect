import { Avatar } from "../avatar";
import styles from "./author.module.css";

export const Author = ({ author }) => {
  return (
    <ul className={styles.author}>
      <li>
        <Avatar author={author} />
      </li>
      <li>@{author.nome}</li>
    </ul>
  );
};
