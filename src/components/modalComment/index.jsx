import { useRef, useState } from "react";
import { IconButton } from "../iconButton";
import { Modal } from "../modal";
import { Textarea } from "../textarea/textarea.jsx";
import { Subheading } from "../subHeading";
import { IconChat } from "../../img/icons/IconChat";
import { IconArrowFoward } from "../../img/icons/IconArrowFoward";
import { Spinner } from "../spinner";
import styles from "./modalComment.module.css";
import { Botao } from "../shared.jsx";
import { Button } from "../button";

export const ModalComment = ({ isEditing }) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    const text = formData.get("text");

    if (!text.trim()) return;

    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      modalRef.current.closeModal();
    } catch (error) {
      console.error("Erro ao criar/atualizar comentário:", error);
    }
  };
  return (
    <>
      <Modal ref={modalRef}>
        <form action={onSubmit}>
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
      <IconButton onClick={() => modalRef.current.openModal()}>
        <IconChat fill={isEditing ? "#000" : "#888888"} />
      </IconButton>
    </>
  );
};
