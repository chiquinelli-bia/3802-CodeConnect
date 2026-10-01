import { useRef } from "react";
import { IconButton } from "../iconButton";
import { Textarea } from "../textarea/textarea.jsx";
import { Subheading } from "../subHeading";
import { IconChat } from "../../img/icons/IconChat";
import { IconArrowFoward } from "../../img/icons/IconArrowFoward";
import { Spinner } from "../spinner";
import styles from "./modalComment.module.css";
import { Button } from "../button";
import { useComments } from "../../app/hooks/useCommentsContext";
import { Modal } from "../modal";

export const ModalComment = ({ isEditing, defaultValue = "", commentId }) => {
  const modalRef = useRef(null);
  const { addComment, editComment, loading } = useComments();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get("text");

    if (!text || !text.trim()) return;

    try {
      if (isEditing) {
        await editComment(commentId, text);
      } else {
        await addComment(text);
      }
      event.target.reset();
      modalRef.current?.closeModal();
    } catch (error) {
      console.error("Erro no submit do comentário:", error);
    }
  };
  return (
    <>
      <Modal ref={modalRef}>
        <form onSubmit={handleSubmit}>
          <Subheading>
            {isEditing
              ? "Editar comentário:"
              : "Deixe seu comentário sobre o post:"}
          </Subheading>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
            defaultValue={defaultValue}
          />
          <div className={styles.footer}>
            <Button disabled={loading} type="submit">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {isEditing ? "Atualizar" : "Comentar"} <IconArrowFoward />
                </>
              )}
            </Button>
          </div>
        </form>
      </Modal>

      <IconButton onClick={() => modalRef.current?.openModal()}>
        <IconChat fill={isEditing ? "#000" : "#888888"} />
      </IconButton>
    </>
  );
};
