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
    if (typeof newComment === "string") {
      setText(newComment);
      return;
    }

    // 2. Se for um objeto, tenta ler .text ou .texto
    const updatedText = newComment?.text || newComment?.texto;

    if (updatedText) {
      setText(updatedText);
    } else {
      console.warn(
        "Retorno de onSuccess não contém 'text' nem 'texto':",
        newComment,
      );
    }
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
