import { iconeChat, iconeCode } from "../../../img";
import { IconThumbsUp } from "../../../img/icons/IconThumbsUp";
import { useState, useContext } from "react";
import { ProjectContext } from "../../../app/context/projectContext";
import { IconButton } from "../../../components/iconButton";
import { useNavigate } from "react-router-dom";

export default function Card({
  id,
  slug,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  projectLikes,
  comentarios,
  usuario,
}) {
  const { handleLike } = useContext(ProjectContext);
  const [likes, setLikes] = useState(projectLikes || 0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLikeClick = async () => {
    if (loading) return;

    setLikes((prev) => prev + 1);
    setLoading(true);

    try {
      await handleLike(id);
    } catch (error) {
      setLikes((prev) => prev - 1);
    } finally {
      setLoading(false);
    }
  };

  const handleGoToBlogPost = () => {
    const target = slug || id;
    if (target) {
      navigate(`/blog-post/${target}`); 
  };

  return (
    <article className="card">
      <div className="card__img">
        <img src={imagemUrl} alt="imagem do post" />
      </div>
      <div className="conteudo__card">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <button onClick={handleGoToBlogPost} className="btn-ver-projeto">
          Ver Projeto
        </button>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={iconeCode} alt="Ìcone de códigos" />
              {linhasDeCodigo}
            </li>
            <li>
              <IconButton onClick={onLikeClick}>
                <IconThumbsUp />
              </IconButton>
              {likes}
            </li>
            <li>
              <img src={iconeChat} alt="Ìcone de comentários" />
              {comentarios}
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="imagem do usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
}
