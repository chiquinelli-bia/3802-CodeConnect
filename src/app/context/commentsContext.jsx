import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { FirebaseCommentRepository } from "../../infra/firebaseCommentRepository";
import { useAuthContext } from "../hooks/useAuthContext";

const commentRepository = new FirebaseCommentRepository();
export const CommentsContext = createContext();

export function CommentsProvider({
  children,
  projectId,
  initialComments = [],
}) {
  const [comments, setComments] = useState(initialComments);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  const addComment = async (texto) => {
    if (!texto.trim()) {
      toast.warn("Escreva algo antes de enviar o comentário.");
      return;
    }

    setLoading(true);

    const novoComentario = {
      id: String(Date.now()),
      texto,
      usuario: {
        id: user?.uid || user?.id || "anonimo-id",
        nome: user?.displayName || "Anônimo",
        imagem: user?.photoURL || user?.imagem || "",
      },
    };

    try {
      await commentRepository.addComment(projectId, novoComentario);
      setComments((prev) => [novoComentario, ...prev]);
      toast.success("Comentário adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar comentário:", error);
      toast.error("Falha ao salvar comentário.");
    } finally {
      setLoading(false);
    }
  };

  const editComment = async (commentId, novoTexto) => {
    if (!novoTexto.trim()) {
      toast.warn("Escreva algo antes de enviar o comentário.");
      return;
    }

    setLoading(true);

    try {
      await commentRepository.updateComment(projectId, commentId, novoTexto);

      setComments((prev) =>
        prev.map((c) =>
          String(c.id) === String(commentId)
            ? { ...c, texto: novoTexto, text: novoTexto }
            : c,
        ),
      );

      toast.success("Comentário editado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar comentário:", error);
      toast.error("Falha ao editar comentário.");
    } finally {
      setLoading(false);
    }
  };
  const deleteComment = async (commentId) => {
    setLoading(true);

    try {
      await commentRepository.deleteComment(projectId, commentId);

      setComments((oldState) =>
        oldState.filter((c) => String(c.id) !== String(commentId)),
      );

      toast.success("Comentário excluido com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir comentário:", error);
      toast.error("Falha ao excluir comentário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        loading,
        addComment,
        editComment,
        deleteComment,
        projectId,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}
