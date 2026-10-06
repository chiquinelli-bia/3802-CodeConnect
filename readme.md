![Thumbnail do projeto. O título é “Code Connect: Rede social com interface completa” e o subtítulo é “adaptado por Bianca Chiquinelli.”](./src/img/thumbnail-codeconnect-social.png)

# Code Connect

Plataforma web de rede social para desenvolvedores voltada ao compartilhamento de projetos, artigos e interações em comunidade.

O projeto nasceu originalmente com uma arquitetura baseada em API RESTful tradicional e foi **refatorado e reestruturado para uma arquitetura Serverless orientada a Clean Architecture**, aplicando boas práticas de desacoplamento, tipagem estática rigorosa e gerenciamento de estado global.

Este repositório apresenta **minhas contribuições específicas** e aprimoramentos aplicados ao desenvolvimento da aplicação.

## 🚀 Funcionalidades Principais

- 🔐 **Autenticação Completa**: Login/Cadastro via e-mail e OAuth (Google/GitHub) com vinculação de contas e persistência de sessão.
- 📝 **Publicação de Projetos**: Criação e edição com pré-visualização de imagens, suporte a Markdown, validação de campos e tags dinâmicas.
- 💬 **Sistema de Comentários**: Modais interativos com suporte a criação, edição, remoção e validação de permissão de autor.
- ❤️ **Engajamento & Feed**: Curtidas em tempo real, busca por título, filtragem por tags e navegação por _slugs_.

## 📸 Demonstração da Interface

|                                        Publicação de Projetos                                         |                                           Feed e Filtros                                            |                                         Login e Cadastro                                         |
| :---------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| ![Interface de publicação de projetos com upload, formulário e tags](https://i.imgur.com/1d1VH6Q.png) | ![Feed com lista de projetos, busca por título e filtros por tags](https://i.imgur.com/CGROkqo.png) | ![Tela de autenticação com formulário e botões de login social](https://i.imgur.com/Khz7pZY.png) |

## 🎯 Arquitetura & Decisões Técnicas

O principal diferencial da aplicação é a **separação clara de responsabilidades** (Domain, Use Cases, Repositories e Infrastructure), garantindo testabilidade e fácil manutenção:

- **Clean Architecture & Repository Pattern**: Isolamento do modelo de domínio e regras de negócio através de interfaces (`IProjectRepository`, `IUserRepository`, `ICommentRepository`). Toda a camada de infraestrutura (Firebase/Firestore) implementa esses contratos de forma desacoplada.
- **Autenticação Avançada & Context API**: Fluxo completo de autenticação via Firebase Auth (E-mail/Senha, Google e GitHub) com tratamento de _account linking_, rotas protegidas e sincronização do estado global com `useAuthContext`.
- **Gerenciamento de Estado de Feed e Comentários**: Contextos otimizados (`ProjectContext` e `CommentsContext`) para suportar interações em tempo real como edição/exclusão de comentários com verificação de autoria, sistema de likes e geração sanitizada de _slugs_.
- **Upload e Mídia Externa**: Integração com a API do Cloudinary para upload de avatares no cadastro e suporte ao `FileReader` para pré-visualização de imagens.
- **TypeScript & Qualidade**: Configuração estrita de tipos em todas as entidades e interações com a API do Firebase/Firestore.
- **UX Responsiva & Feedbacks**: Notificações em tempo real com `React-Toastify` substituindo `alerts` nativos, além de componentes modularizados e estilizados sem manipulação direta do DOM.

## 🛠️ Tecnologias Utilizadas

- **Core:** React, TypeScript, Vite, React Router DOM
- **Backend / Serverless:** Firebase (Authentication, Firestore)
- **Mídia & Uploads:** Cloudinary API
- **Estilização & UI:** CSS Modules / CSS Nesting, React Icons, React Markdown
- **Feedback Visual:** React Toastify

## Como acessar o projeto

- **Versão online**: [Clique aqui](https://3802-code-connect.vercel.app/)
- **Rodar localmente**:
  1. Clone o repositório:

     ```bash
     git clone https://github.com/chiquinelli-bia/code-connect.git
     ```

  2. Acesse a pasta do projeto:

     ```bash
     cd code-connect
     ```

  3. Instale as dependências:

     ```bash
     npm install
     ```

  4. Inicie o servidor de desenvolvimento:

     ```bash
     npm run dev
     ```

  5. Abra no navegador o endereço exibido no terminal.

     ```bash
     # 1. Clone o repositório
     git clone [https://github.com/chiquinelli-bia/code-connect.git](https://github.com/chiquinelli-bia/code-connect.git)

     # 2. Acesse a pasta do projeto
     cd code-connect

     # 3. Instale as dependências
     npm install

     # 4. Configure as variáveis de ambiente (.env) com suas credenciais do Firebase e Cloudinary
     # VITE_FIREBASE_API_KEY=...
     # VITE_CLOUDINARY_URL=...

     # 5. Inicie o servidor de desenvolvimento
     npm run dev
     ```

## Créditos

- Projeto base da Alura:
  - [Tela de publicação](https://github.com/alura-cursos/3802-javascript-assincrono)
  - [Tela de login e cadastro](https://github.com/alura-cursos/3492-React-componentes/tree/projeto-base)
  - [Tela de Feed](https://cursos.alura.com.br/course/react-configurando-estruturando-projetos-vite)
  - [Interações com as publicações](https://cursos.alura.com.br/course/react-consumindo-apis-http)

Este repositório registra a **reestruturação arquitetural** e a **implementação de recursos avançados** desenvolvidos por Bianca Chiquinelli.
