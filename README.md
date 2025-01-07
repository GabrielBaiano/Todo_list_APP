# Projeto Todo App com React Native

Este é um aplicativo simples de lista de tarefas (Todo App) construído com React Native. Ele permite que os usuários criem, editem, concluam e excluam tarefas, além de oferecer funcionalidades de pesquisa e visualização de estatísticas.

## Demonstração

Confira uma apresentação em vídeo do projeto: [https://www.youtube.com/watch?v=mJPHA69XDfA](https://www.youtube.com/watch?v=mJPHA69XDfA)

## Funcionalidades

*   **Adicionar Tarefas:** Os usuários podem adicionar novas tarefas à lista.
*   **Marcar como Concluída:** As tarefas podem ser marcadas como concluídas, exibindo um estilo visual diferente.
*   **Excluir Tarefas:** As tarefas podem ser excluídas da lista.
*   **Pesquisa de Tarefas:** Os usuários podem pesquisar tarefas na lista.
*   **Estatísticas:** O aplicativo exibe estatísticas sobre o número total de tarefas criadas e o número de tarefas concluídas.
*   **Interface Limpa e Intuitiva:** O aplicativo possui uma interface de usuário limpa e fácil de usar.
*   **Modal de Criação:** Utiliza um modal para a criação de novas tarefas, melhorando a experiência do usuário.

## Tecnologias Utilizadas

*   **React Native:** Framework para construção de aplicativos móveis multiplataforma usando JavaScript e React.
*   **React Navigation:** Biblioteca para navegação entre telas no React Native.
*   **React Native Vector Icons:** Biblioteca para utilização de ícones vetoriais.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.

## Como Executar

1.  **Pré-requisitos:**
    *   [Node.js](https://nodejs.org/) (versão LTS recomendada)
    *   [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
    *   [Expo CLI](https://docs.expo.dev/get-started/installation/) (recomendado para facilitar o desenvolvimento) ou ambiente de desenvolvimento React Native configurado (requer Android Studio/Xcode).

2.  **Clonar o repositório:**

    ```bash
    git clone https://github.com/GabrielBaiano/Todo_list_APP.git
    cd nome-do-projeto
    ```

3.  **Instalar as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Executar o aplicativo (com Expo):**

    ```bash
    npx expo start
    # ou
    expo start
    ```

    Isso abrirá o Metro Bundler no seu navegador. Você pode então:

    *   Escanear o QR code com o aplicativo Expo Go no seu celular (Android ou iOS).
    *   Executar em um emulador Android ou iOS.

5. **Executar o aplicativo (sem Expo - Bare Workflow):**

    Siga as instruções da documentação do React Native para configurar o ambiente nativo para Android e/ou iOS. Após a configuração, execute:

    ```bash
    npx react-native run-android # Para Android
    npx react-native run-ios   # Para iOS
    ```

## Estrutura do Projeto

Todo_list_app/
├── App.tsx             // Componente principal do aplicativo
├── components/         // Componentes reutilizáveis
│   └── LogoutButton.tsx
├── ...                 // Outros arquivos e pastas
├── package.json        // Arquivo de dependências
└── ...
