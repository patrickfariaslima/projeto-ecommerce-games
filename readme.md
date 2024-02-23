# *Projeto de E-commerce de Jogos*🎮

Este projeto é um sistema simples de e-commerce de jogos, onde os usuários podem visualizar uma lista de jogos, selecionar os jogos desejados, criar um pedido e visualizar pedidos existentes.

# *Tecnologias Utilizadas:* 🚀
- Node.js
- Express.js
- Sequelize (ORM para interação com o banco de dados)
- SQLite (Banco de dados relacional)
- EJS (Engine de visualização)
- Multer (Middleware para upload de imagens)
- CORS (Para habilitar o compartilhamento de recursos entre diferentes origens)

# *REQUISITOS DA ATIVIDADE:*
PRINCIPAL (1000XP)

[x] Trabalho em grupo evolvendo a construção de um ecommerce, com base em um tema obtido a partir da roleta;

[x] A API deve ser feita contendo pelo menos 3  CRUDs, de 3 entidades diferentes, envolvendo upload e download de imagem em pelo menos um (300XP); 

[x] O frontend deve se comunicar com o back, tendo uma tela pelo menos que usa e/ou acessa cada rota (o grupo pode escolher entre o EJS e outra tecnologia de frontend)(100XP);  

[x] Deve ter pelo menos um middleware no back (50XP);  - Usamos o LogMiddleware

[x] Telas de login/cadastro como parte do sistema de autenticação (o usuário deve poder dar logout também) (200XP); Temos telas de login, porém não há autenticação.

[x] O back deve ser feito em typescript e usando ES Module para importação e exportação de arquivos (módulos) (100XP); 

[x] Validação de formulário no front, e validação das rotas no back (try-catch, bem como fizemos módulo passado) (150XP); 

[x] Utilizar .env para registro de credenciais no back (50XP); 

[x]  Back deve persistir os dados usando um banco relacional ou nao-relcional (através do ORM de preferência) (50XP);

EXTRA (300XP)
[ ]  Integrar a compra com algum Gateway de pagamento;
[x]  Usar alguma biblioteca de CSS, deixando a página apresentável. - Usamos bootsrap;

EXTRA DO EXTRA (300XP)
[ ] Criar testes unitários envolvendo alguma biblioteca de teste automatizado para todas as rotas de um dos CRUDs (incluindo integração com autenticação).


# *Funcionalidades Implementadas:* 🛠
1. Listagem de jogos disponíveis.
2. Upload de imagens para os jogos.
3. Criação de usuários.
4. Visualização e atualização de dados do usuário.
5. Criação de pedidos.
6. Visualização de pedidos existentes.

# *Estrutura do Projeto:* 🏗
- **src/controllers**: Contém os controladores para as entidades principais (jogos, usuários, pedidos).
- **src/models**: Define os modelos Sequelize para jogos, usuários e pedidos.
- **src/public**: Contém recursos estáticos, como imagens.
- **src/routes**: Define as rotas do aplicativo.
- **src/utils**: Utilitários, como configurações de upload de imagens.
- **src/views**: Armazena os arquivos de visualização EJS.

# *Instruções de Execução:* ⚙
1. Clone o repositório.
2. Execute npm install para instalar as dependências.
3. Execute npm run dev para iniciar o servidor de desenvolvimento.

Acesse o aplicativo em [http://localhost:3000](http://localhost:3000).

# Encerramento:
Este é um projeto básico que pode ser expandido com mais funcionalidades, melhorias de segurança, entre outros. Sinta-se à vontade para explorar, modificar e aprimorar conforme necessário para atender aos requisitos específicos.
Em caso de dúvidas ou necessidade de feedback, sinta-se à vontade para entrar em contato:
* Patrick Farias Lima - patrickfarias@live.com - (85)99955-0878.
* Suamy Vasconcelos - suamyvc@hotmail.com - (81) 98884-8520
