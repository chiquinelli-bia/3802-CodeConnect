import {
  iconeChat,
  iconeCode,
  iconeShare,
  iconeUsuario,
  imgCard,
} from "../../../img";

export default function Card() {
  return (
    <article className="card">
      <div className="card__img">
        <img src={imgCard} alt="imagem do post" />
      </div>
      <div className="conteudo__card">
        <div className="conteudo__texto">
          <h3>Titulo do post em duas linhas</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint.
          </p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={iconeCode} alt="Ìcone de códigos" />
              100
            </li>
            <li>
              <img src={iconeShare} alt="Ìcone de compartilhamento" />
              12
            </li>
            <li>
              <img src={iconeChat} alt="Ìcone de cmentários" />
              10
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={iconeUsuario} alt="imagem do usuário" />
            @Usuário
          </div>
        </div>
      </div>
    </article>
  );
}
