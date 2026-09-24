import styles from "./comment.module.css";
import { Avatar } from "../avatar";

export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Avatar author={comment.author} />
      <strong>@{comment.author.nome}</strong>
      <p>{comment.text}</p>
    </div>
  );
};
