import styles from "./avatar.module.css";

export const Avatar = ({ autor }) => {
  return (
    <div className={styles.container}>
      {autor?.imagem && (
        <img src={autor.imagem} alt={`Avatar de ${autor.nome}`} />
      )}
    </div>
  );
};
