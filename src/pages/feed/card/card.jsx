import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { iconeCode } from "../../../img";
import { IconThumbsUp } from "../../../img/icons/IconThumbsUp";
import { ProjectContext } from "../../../app/context/projectContext";
import { IconButton } from "../../../components/iconButton";
import { Button } from "../../../components/button";
import { ModalComment } from "../../../components/modalComment";

import { CommentsProvider } from "../../../app/context/commentsContext";
import { useComments } from "../../../app/hooks/useCommentsContext";

const CardCommentAction = () => {
  const { comments } = useComments();
  return (
    <>
      <ModalComment />
      <span>{comments.length}</span>
    </>
  );
};

export default function Card({
  id,
  slug,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo = 0,
  projectLikes = 0,
  comentarios = [], // Recebe o array de comentários do post
  usuario,
}) {
  const { handleLike } = useContext(ProjectContext);
  const [likes, setLikes] = useState(projectLikes);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLikes(projectLikes);
  }, [projectLikes]);

  const onLikeClick = async () => {
    if (loading) return;

    setLikes((prev) => prev + 1);
    setLoading(true);

    try {
      await handleLike(id);
    } catch (error) {
      setLikes((prev) => prev - 1);
      console.error("Erro ao dar like no projeto:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoToBlogPost = () => {
    const target = slug || id;
    if (target) {
      navigate(`/blog-post/${target}`);
    }
  };

  return (
    <article className="card">
      <div className="card__img">
        <img src={imagemUrl} alt={`Capa do projeto ${titulo}`} />
      </div>
      <div className="conteudo__card">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <Button onClick={handleGoToBlogPost}>Ver Projeto</Button>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={iconeCode} alt="Ícone de código" />
              {linhasDeCodigo}
            </li>
            <li>
              <IconButton onClick={onLikeClick} disabled={loading}>
                <IconThumbsUp />
              </IconButton>
              {likes}
            </li>
            <li>
              {/* Envolve o botão/modal e o contador com o Provider do projeto */}
              <CommentsProvider
                projectId={id}
                initialComments={Array.isArray(comentarios) ? comentarios : []}
              >
                <CardCommentAction />
              </CommentsProvider>
            </li>
          </ul>
          <div className="rodape__usuario">
            {usuario?.imagem && (
              <img
                src={usuario.imagem}
                alt={`Avatar de ${usuario.nome || "usuário"}`}
              />
            )}
            <span>{usuario?.nome || "Anônimo"}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
