import styles from "./comment.module.css";
import { Avatar } from "../avatar";
import { useAuthContext } from "../../app/hooks/useAuthContext";
import { useState } from "react";
import { ModalComment } from "../modalComment";

export const Comment = ({ comment, projectId }) => {
  const { user } = useAuthContext();
  const [text, setText] = useState(comment?.text || comment?.texto || "");
  const autor = comment?.author || comment?.usuario;
  const isOwner = user && user.uid == autor.id;

  const handleEdit = (newComment) => {
    setText(newComment.text);
  };
  return (
    <div className={styles.comment}>
      <Avatar autor={autor} />
      <strong>{autor?.nome || "Anônimo"}</strong>
      <p>{text}</p>
      {isOwner && (
        <ModalComment
          isEditing
          onSuccess={handleEdit}
          defaultValue={text}
          commentId={comment.id}
          projectId={projectId}
        />
      )}
    </div>
  );
};
