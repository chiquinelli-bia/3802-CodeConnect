import styles from "./butoon.module.css";

export const Button = ({ children, onClick, ...props }) => {
  return (
    <button className={styles.btn} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
