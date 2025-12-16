![Thumbnail do projeto. O título é “Code Connect: Rede social com interface de login” e o Subtítulo é “adaptado por Bianca Chiquinelli.”](./src/img/thumbnail-codeconnect-social.png)

# Code Connect

Rede social fictícia voltada para desenvolvedores, criada para explorar fluxos assíncronos e componentização em React.  
Projeto desenvolvido a partir dos cursos _"JavaScript: entendendo promises e async/await"_ e _"React: construindo componentes com JSX"_, ministrados por **Mônica Mazzochi Hillman**.

Este repositório apresenta **minhas contribuições específicas** e aprimoramentos aplicados ao desenvolvimento da aplicação.

**Code Connect:** é uma rede social fictícia voltada para desenvolvedores.

A página inicial permite inserir informações sobre projetos, adicionar tags de busca, publicar ou descartar conteúdos e fazer upload de imagens de pré-visualização que substituem dinamicamente a imagem principal.  
Toda a aplicação foi estruturada em _HTML_, _CSS_ e _JavaScript_, com _media queries_ para responsividade, além de _React_ para as páginas de login e cadastro — utilizando componentes funcionais e reutilizáveis.

Embora não haja integração com back-end, o comportamento assíncrono foi simulado para representar fluxos reais de publicação e validação. O layout foi projetado para manter consistência, escalabilidade e facilidade de manutenção.

## Minhas Contribuições

### Tela Inicial

- **Upload e pré-visualização de imagem:** Adicionei leitura assíncrona com _FileReader_ e _Promise_, exibindo a prévia da imagem imediatamente e atualizando a interface de forma dinâmica.
- **Publicação de projetos:** Modelei uma _Promise_ com _delay_ controlado para simular o envio de dados, testando fluxos de feedback visual e tratamento de erros.
- **Descarte de projetos:** Criei a função que restaura o formulário ao estado inicial, limpando campos, tags e imagens — garantindo um reinício limpo e previsível.
- **Gerenciamento dinâmico de tags:** Estruturei criação, validação e exclusão dinâmica de tags, mantendo consistência entre dados e interface e preparando a lógica para futuras expansões.

![Demonstração do CodeConnect: Interface de uma rede social para desenvolvedores, com barra lateral de navegação que dá acesso às páginas de autenticação, feed, perfil e informações; formulário para detalhes do projeto, tags para busca e opções de upload de imagens; além de botões para publicar ou descartar. Layout moderno e organizado.](https://i.imgur.com/1d1VH6Q.png)

### Páginas de Login e Cadastro

- **Adaptação ao Vite:** Migrei o projeto para _Vite_, tornando o build mais rápido e o ambiente de desenvolvimento mais fluido.
- **Componentes reutilizáveis:** Estruturei componentes funcionais flexíveis, permitindo personalizar textos e atributos sem duplicar código.
- **Formulários controlados:** Configurei inputs com _useState_ e funções de captura (handleSubmit, handleChange) para refletir interações do usuário em tempo real.

![Demonstração do CodeConnect: Imagem de uma mulher negra de óculos sorrindo enquanto usa um laptop, com um fundo de grade digital verde. À direita, está a tela de login do “Code Connect”, com campos para nome, e-mail e senha, opções de “Lembrar” e “Esqueci a senha”, seguidas por um botão de login e opções de acesso com Google e GitHub. Ao final, há a mensagem “Ainda não tem cadastro?” e um botão com o texto “Crie seu cadastro”.](https://i.imgur.com/DluHNva.png)

💡 _Este projeto marcou uma fase importante do meu aprendizado. Hoje sigo uma estrutura mais consistente, mas mantenho esta versão como registro da minha evolução e das decisões que me ajudaram a compreender arquitetura e boas práticas._

 💡 _Este projeto foi uma das etapas em que explorei diferentes formas de estruturar a organização de pastas e arquivos. Hoje sigo um padrão mais consistente, mas deixei essa versão visível para mostrar meu processo de aprendizado_

## ✔️ Técnicas e tecnologias utilizadas

**Técnicas aplicadas:**

- **Leitura e processamento assíncrono de arquivos:** Combinação de _FileReader_, _Promises_ e _async/await_ para leitura e pré-visualização de imagens de forma fluida.

- **Simulação de tempo de execução:** Uso de _setTimeout_ para testar fluxos com delays controlados, como envio de projetos.

- **Tratamento de erros:** Aplicação de _try/catch_ para capturar falhas e garantir estabilidade da aplicação.

- **Manipulação de eventos:** Uso de _addEventListener_ e lógica React para tornar a interface interativa e responsiva às ações do usuário.

- **Componentização e gerenciamento de estado:** Construção de componentes modulares e controle com _useState_, garantindo atualização instantânea e código escalável.

**Tecnologias:**

- `HTML5` & `CSS3`

- `JavaScript` (ES6+)

- `React` (JSX, Hooks)

- `Vite`

## Como acessar o projeto

- **Versão online**: [Clique aqui](https://3802-code-connect.vercel.app/)
- **Rodar localmente**:

1. Clone este repositório:

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

5. Abra no navegador o endereço exibido no terminal e Navegue pelas funcionalidades implementadas.

## Créditos

- Projeto original: [Tela inicial](https://github.com/alura-cursos/3802-javascript-assincrono) e [Tela de login e cadastro](https://github.com/alura-cursos/3492-React-componentes/tree/projeto-base)
- Instrutor(es) e curso: Mônica Mazzochi Hillman, [JavaScript: entendendo promises e async/await](https://cursos.alura.com.br/course/javascript-entendendo-promises-async-await) e [React: construindo componentes com JSX](https://cursos.alura.com.br/course/react-construindo-componentes-jsx)
- Este repositório destaca **apenas minhas contribuições** ao projeto
