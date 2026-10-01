import styles from "./comment.module.css";
import { Avatar } from "../avatar";
import { useAuthContext } from "../../app/hooks/useAuthContext";
import { ModalComment } from "../modalComment";

export const Comment = ({ comment }) => {
  const { user } = useAuthContext();
  const autor = comment?.usuario || comment?.author;
  const texto = comment?.texto || comment?.text || "";

  const isOwner = Boolean(
    user && autor && (user.uid === autor.id || user.id === autor.id),
  );

  return (
    <div className={styles.comment}>
      <Avatar autor={autor} />
      <strong>{autor?.nome || "Anônimo"}</strong>
      <p>{texto}</p>
      {isOwner && (
        <ModalComment isEditing defaultValue={texto} commentId={comment?.id} />
      )}
    </div>
  );
};
