import styles from "./comment.module.css";
import { Avatar } from "../avatar";

export const Comment = ({ comment }) => {
  const autor = comment?.author || comment?.usuario;
  const texto = comment?.text || comment?.texto || "";
  return (
    <div className={styles.comment}>
      <Avatar autor={autor} />
      <strong>{autor?.nome || "Anônimo"}</strong>
      <p>{texto}</p>
    </div>
  );
};
