![Thumbnail do projeto. O título é “Code Connect: Rede social com interface completa” e o subtítulo é “adaptado por Bianca Chiquinelli.”](./src/img/thumbnail-codeconnect-social.png)

# Code Connect

Rede social fictícia voltada para desenvolvedores, criada para simular um produto real e explorar fluxos assíncronos, componentização em React.
O projeto foi desenvolvido a partir dos cursos _"JavaScript: entendendo promises e async/await"_, _"React: construindo componentes com JSX"_ e _"React: configurando e estruturando projetos com Vite"_, com foco em aplicar conceitos técnicos em cenários próximos ao mercado.

Este repositório apresenta **minhas contribuições específicas** e aprimoramentos aplicados ao desenvolvimento da aplicação.

A aplicação permite publicar projetos com upload de imagem, gerenciamento de tags, descarte de conteúdo e visualização dinâmica na página de feed, que conta com busca por título, filtragem por tags e ordenação de resultados. aprimorando a usabilidade e a experiência do usuário.

Desenvolvido com _React_, _JavaScript_ e _CSS_, o projeto utiliza componentes funcionais reutilizáveis, gerenciamento de estado e responsividade, refletindo decisões técnicas alinhadas a cenários reais de desenvolvimento frontend.

**💡 Observação sobre persistência dos dados**

_Este projeto consome uma API hospedada no Render utilizando json-server. Como o ambiente é efêmero, os projetos criados podem ser resetados após um período de inatividade ou novo deploy. As imagens, por outro lado, são armazenadas no GitHub e permanecem disponíveis. Essa arquitetura foi adotada intencionalmente para fins educacionais, demonstrando integração com APIs, upload de arquivos e consumo de dados em ambientes reais de deploy._

## Minhas contribuições

Atuei de forma contínua na evolução do projeto, com foco em arquitetura em React, integração com API, qualidade de código e experiência do usuário, simulando a evolução de um produto em crescimento.

### Publicação de projetos (fluxo completo)

- **Migração da página de Publicar para React**: conversão da estrutura originalmente em _HTML_/_JS_ para componentes _React_, preparando a base para escalabilidade e manutenção.
- **Integração com API**: envio completo de projetos via _FormData_ e _Axios_, incluindo dados textuais, tags e upload de imagem.
- **Upload de imagem com pré-visualização**: leitura assíncrona com _FileReader_ e preview em _Base64_, garantindo feedback imediato ao usuário.
- **Descarte de projetos**: restauração do formulário ao estado inicial, limpando campos, tags e imagens, garantindo um reinício limpo e previsível.
- **Gerenciamento de tags**: criação, validação e exclusão dinâmica de tags, mantendo consistência entre dados e interface.

![Demonstração do CodeConnect: Interface de uma rede social para desenvolvedores, com barra lateral de navegação, formulário de projeto, tags, upload de imagens e botões de publicar e descartar. Layout moderno e organizado.](https://i.imgur.com/1d1VH6Q.png)

### Página de feed, busca e filtragem

- **Busca por título e filtro por tags integrados**: lógica combinada de busca textual e filtragem por tags no componente Feed, com tratamento de casos como ausência de tags e resultados vazios, garantindo uma experiência estável e previsível.
- **Ordenação de projetos**: implementação de ordenação para preparar o feed para crescimento no volume de dados.

![Demonstração do CodeConnect: A tela mostra um menu lateral à esquerda com logo, botão “Publicar” e links de navegação. No topo, há uma barra de busca com o texto “Digite e aperte Enter” e filtros de tags como HTML, CSS e JavaScript. Na área principal, a seção “Recentes” exibe dois cards de projetos com imagem de capa, título e descrição resumida.](https://i.imgur.com/7WFgS17.png)

### Páginas de login e cadastro

- **Migração ao Vite**: ambiente de desenvolvimento mais rápido e build otimizado.
- **Componentes reutilizáveis**: componentes funcionais flexíveis, evitando duplicação de código.
- **Formulários controlados**: inputs controlados com _useState_ e funções de captura com _handlers_ para refletir interações em tempo real.

![Demonstração do CodeConnect: Tela de login com campos de nome, e-mail e senha, opções de lembrar, recuperação de senha e login social com Google e GitHub.](https://i.imgur.com/DluHNva.png)

### Componentização e arquitetura

- **Props flexíveis e opcionais**: refatoração para maior reutilização, reduzindo acoplamento e facilitando manutenção.
- **Organização estrutural**: reorganização de pastas, imports e arquivos para melhorar legibilidade e escalabilidade.
- **Acessibilidade básica**: adição de _aria-label_, _title_ e descrições visuais em botões e links não finalizados.

💡 _Este projeto marcou uma fase importante do meu aprendizado. Hoje sigo uma estrutura mais consistente, mas mantenho esta versão como registro da minha evolução e das decisões que me ajudaram a compreender arquitetura e boas práticas._

## Técnicas e tecnologias utilizadas

**Técnicas aplicadas**

- Leitura e processamento assíncrono de arquivos com _FileReader_, _Promises_ e _async/await_.
- Envio de dados multipart através de `FormData` para publicação de projetos com dados textuais e arquivos, simulando fluxos reais de integração frontend–backend.
- Tratamento de erros com _try/catch_ para garantir estabilidade da aplicação.
- Componentes funcionais com _props_ flexíveis e gerenciamento de estado com _useState_ e _useEffect_ para atualizações instantâneas e código escalável.

**Tecnologias**

- `HTML5` e `CSS3`
- `JavaScript` (ES6+)
- `React` (JSX, Hooks)
- `Vite`
- `Axios`

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

## Créditos

- Projeto base da Alura:

  - [Tela inicial](https://github.com/alura-cursos/3802-javascript-assincrono)
  - [Tela de login e cadastro](https://github.com/alura-cursos/3492-React-componentes/tree/projeto-base)
  - [Tela de Feed](https://cursos.alura.com.br/course/react-configurando-estruturando-projetos-vite)

- Instrutora: _Mônica Mazzochi Hillman_

Este repositório destaca exclusivamente _minhas contribuições_ e _adaptações_ sobre os projetos base.
