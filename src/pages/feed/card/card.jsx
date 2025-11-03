import { iconeChat, iconeCode, iconeShare } from "../../../img";

export default function Card({
  id,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
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
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={iconeCode} alt="Ìcone de códigos" />
              {linhasDeCodigo}
            </li>
            <li>
              <img src={iconeShare} alt="Ìcone de compartilhamento" />
              {compartilhamentos}
            </li>
            <li>
              <img src={iconeChat} alt="Ìcone de cmentários" />
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
