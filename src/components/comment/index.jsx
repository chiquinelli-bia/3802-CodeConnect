import styles from "./comment.module.css";
import { Avatar } from "../avatar";
import { useAuthContext } from "../../app/hooks/useAuthContext";
import { useComments } from "../../app/hooks/useCommentsContext";
import { ModalComment } from "../modalComment";
import { IconButton } from "../iconButton";

export const Comment = ({ comment }) => {
  const { user } = useAuthContext();
  const { deleteComment } = useComments();
  const autor = comment?.usuario || comment?.author;
  const texto = comment?.texto || comment?.text || "";
  console.log(autor, user);
  const isOwner = Boolean(
    user && autor && (user.uid === autor.id || user.id === autor.id),
  );
  const handleDelete = () => {
    if (comment?.id) {
      deleteComment(comment.id);
    }
  };
  return (
    <div className={styles.comment}>
      <div className={styles.content}>
        <Avatar autor={autor} />
        <strong>{autor?.nome || "Anônimo"}</strong>
        <p>{texto}</p>
      </div>
      {isOwner && (
        <div className={styles.actions}>
          <ModalComment
            isEditing
            defaultValue={texto}
            commentId={comment?.id}
          />
          <IconButton onClick={handleDelete}>X</IconButton>{" "}
        </div>
      )}
    </div>
  );
};
