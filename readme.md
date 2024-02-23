*Projeto de E-commerce de Jogos* 🎮

Este projeto é um sistema simples de e-commerce de jogos, onde os usuários podem visualizar uma lista de jogos, selecionar os jogos desejados, criar um pedido e visualizar pedidos existentes.

*Tecnologias Utilizadas:* 🚀
- Node.js
- Express.js
- Sequelize (ORM para interação com o banco de dados)
- SQLite (Banco de dados relacional)
- EJS (Engine de visualização)
- Multer (Middleware para upload de imagens)
- CORS (Para habilitar o compartilhamento de recursos entre diferentes origens)

*Funcionalidades Implementadas:* 🛠
1. Listagem de jogos disponíveis.
2. Upload de imagens para os jogos.
3. Criação de usuários.
4. Visualização e atualização de dados do usuário.
5. Criação de pedidos.
6. Visualização de pedidos existentes.

*Estrutura do Projeto:* 🏗
- **src/controllers**: Contém os controladores para as entidades principais (jogos, usuários, pedidos).
- **src/models**: Define os modelos Sequelize para jogos, usuários e pedidos.
- **src/public**: Contém recursos estáticos, como imagens.
- **src/routes**: Define as rotas do aplicativo.
- **src/utils**: Utilitários, como configurações de upload de imagens.
- **src/views**: Armazena os arquivos de visualização EJS.

*Instruções de Execução:* ⚙
1. Clone o repositório.
2. Execute npm install para instalar as dependências.
3. Execute npm run dev para iniciar o servidor de desenvolvimento.

Acesse o aplicativo em [http://localhost:3000](http://localhost:3000).

Este é um projeto básico que pode ser expandido com mais funcionalidades, melhorias de segurança, entre outros. Sinta-se à vontade para explorar, modificar e aprimorar conforme necessário para atender aos requisitos específicos.