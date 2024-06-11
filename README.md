### Projeto: Desenvolvimento Full-Stack com React-TS e Node.js

Bem-vindo ao repositório do projeto de desenvolvimento full-stack utilizando React com TypeScript (React-TS) no frontend, Node.js no backend, e PostgreSQL para o gerenciamento de dados.

---

### Índice

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação](#instalação)
4. [Configuração do Ambiente](#configuração-do-ambiente)
5. [Comandos Principais](#comandos-principais)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Contribuindo](#contribuindo)
8. [Licença](#licença)

---

### Visão Geral

Este projeto foi desenvolvido para aprimorar o conhecimento em tecnologias modernas de desenvolvimento web, utilizando uma arquitetura full-stack robusta e escalável.

### Tecnologias Utilizadas

- **Frontend:** React com TypeScript (React-TS)
- **Backend:** Node.js com Express
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma
- **Contêinerização:** Docker e Docker Compose
- **CI/CD:** Azure DevOps

### Instalação

Siga os passos abaixo para configurar o projeto localmente.

1. Clone o repositório:

    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Suba os contêineres Docker:

    ```sh
    docker compose up -d
    ```

4. Execute as migrações do Prisma:

    ```sh
    npx prisma migrate dev
    ```

5. Inicie o servidor de desenvolvimento:

    ```sh
    npm run dev
    ```

### Comandos Principais

- **Instalar Dependências:** `npm install`
- **Subir Contêineres Docker:** `docker compose up -d`
- **Executar Migrações Prisma:** `npx prisma migrate dev`
- **Iniciar Servidor de Desenvolvimento:** `npm run dev`
- **Rodar Testes:** `npm test`

### Estrutura do Projeto
/
├── node_modules/            # Módulos instalados do Node.js
├── prisma/                  # Configurações e migrações do Prisma
│   └── schema.prisma        # Definição do esquema do banco de dados
├── src/                     # Código-fonte do projeto
│   ├── config/              # Configurações de autenticação
│   │   └── auth.ts
│   ├── controllers/         # Controladores da aplicação
│   │   └── todo/
│   │       └── index.ts
│   ├── middleware/          # Middlewares da aplicação
│   │   └── userMiddleware.ts
│   ├── types/               # Definições de tipos TypeScript
│   │   ├── app.ts
│   │   └── index.ts
│   └── declarations.d.ts    # Declarações de tipos adicionais
├── .env                     # Variáveis de ambiente
├── .gitignore               # Arquivos e pastas a serem ignorados pelo Git
├── docker-compose.yml       # Configuração do Docker Compose
├── nodemon.json             # Configurações do Nodemon
├── package-lock.json        # Arquivo de bloqueio de dependências
├── package.json             # Dependências e scripts npm
├── README.md                # Este arquivo
└── tsconfig.json            # Configurações do TypeScript


### Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Siga os passos abaixo para contribuir:

1. Fork este repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

Obrigado por conferir este projeto! Se tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue. Bons códigos!