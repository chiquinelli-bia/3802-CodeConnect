import { Comment } from "../comment";
import styles from "./commentList.module.css";

export const CommentList = ({ comments, projectId }) => {
  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment
              comment={comment}
              key={comment.id}
              author={comment.usuario || comment.author}
              projectId={projectId}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
