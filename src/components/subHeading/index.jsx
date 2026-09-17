import styles from "./subHeading.module.css";

export const Subheading = ({ children }) => {
  return <h2 className={styles.subheading}>{children}</h2>;
};
