import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown";

import styles from "./blogPost.module.css";
import { ThumbsUpButton } from "../../components/cardPost/thumbsUpButton";
import { Author } from "../../components/author";
import Typography from "../../components/typography";
import { CommentList } from "../../components/commentList";
import { ModalComment } from "../../components/modalComment";

import { FirebaseProjectRepository } from "../../infra/firebaseProjectRepository";
import { ListProjects } from "../../domain/useCases/api/listProjects";

const repository = new FirebaseProjectRepository();
const listProjectsUseCase = new ListProjects(repository);

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarPost() {
      if (!slug) return;

      const toastId = toast.loading("Carregando post...");
      setLoading(true);

      try {
        const projetos = await listProjectsUseCase.execute();

        const postEncontrado = projetos.find(
          (p) => p.slug === slug || String(p.id) === slug,
        );

        if (!postEncontrado) {
          toast.update(toastId, {
            render: "Post não encontrado.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
          navigate("/not-found");
          return;
        }
        console.log(postEncontrado);
        setPost(postEncontrado);
        toast.update(toastId, {
          render: "Post carregado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      } catch (error) {
        console.error("Erro ao buscar projetos do Firebase:", error);

        toast.update(toastId, {
          render: "Erro ao carregar o post. Tente novamente.",
          type: "error",
          isLoading: false,
          autoClose: 4000,
        });
      } finally {
        setLoading(false);
      }
    }

    carregarPost();
  }, [slug, navigate]);

  if (loading || !post) {
    return null;
  }

  return (
    <main className={styles.main}>
      <article className={styles.card}>
        <header className={styles.header}>
          <figure className={styles.figure}>
            <img
              src={post.imagem_capa}
              alt={`Capa do post de título: ${post.titulo}`}
            />
          </figure>
        </header>
        <div className={styles.wrapperContent}>
          <section className={styles.body}>
            <h2>{post.titulo}</h2>
            <p>{post.resumo}</p>
          </section>
          <footer className={styles.footer}>
            <div className={styles.actions}>
              <div className={styles.action}>
                <ThumbsUpButton loading={false} />
                <p>{post.likes ?? 0}</p>
              </div>
              <div className={styles.action}>
                <ModalComment />
                <p>{post.comentarios_postagem?.length ?? 0}</p>
              </div>
            </div>
            <Author author={post.usuario} />
          </footer>
        </div>
      </article>

      {post.conteudo_codigo && (
        <>
          <Typography variant="h3">Código:</Typography>
          <div className={styles.code}>
            <pre className={styles.pre}>
              <code className={styles.codeBlock}>
                <ReactMarkdown>
                  {`\`\`\`js\n${post.conteudo_codigo}\n\`\`\``}
                </ReactMarkdown>
              </code>
            </pre>
          </div>
        </>
      )}

      <CommentList comments={post.comentarios_postagem ?? []} />
    </main>
  );
};
