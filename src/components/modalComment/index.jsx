import { useRef, useState, useContext } from "react";
import { IconButton } from "../iconButton";
import { Modal } from "../modal";
import { Textarea } from "../textarea/textarea.jsx";
import { Subheading } from "../subHeading";
import { IconChat } from "../../img/icons/IconChat";
import { IconArrowFoward } from "../../img/icons/IconArrowFoward";
import { Spinner } from "../spinner";
import styles from "./modalComment.module.css";
import { Button } from "../button";

import { ProjectContext } from "../../app/context/projectContext";

export const ModalComment = ({ isEditing, projectId, onSuccess }) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const { handleAdicionarComentario } = useContext(ProjectContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get("text");

    if (!text || !text.trim()) return;

    try {
      setLoading(true);

      const novoComentario = await handleAdicionarComentario(projectId, text);

      if (novoComentario && onSuccess) {
        onSuccess(novoComentario);
      }

      event.target.reset();
      modalRef.current?.closeModal();
    } catch (error) {
      console.error("Erro ao criar/atualizar comentário:", error);
    } finally {
      setLoading(false);
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
