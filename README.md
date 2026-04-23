Projeto Docker CI/CD: Frontend Estático
Este projeto faz parte da minha jornada de especialização em DevOps. O objetivo principal foi criar um ambiente de Integração Contínua (CI) que automatiza o build e o teste de um container Docker sempre que um novo código é enviado ao repositório.

🛠️ Tecnologias Utilizadas
Docker: Containerização da aplicação utilizando imagens leves (nginx:alpine).

Nginx: Servidor web de alta performance para servir arquivos estáticos.

GitHub Actions: Automação do pipeline de CI (Build e Test).

Linux (Ubuntu): Ambiente de desenvolvimento e execução.

🏗️ Estrutura do Projeto
Plaintext
projeto_docker_ci_cd/
├── Frontend/           # Arquivos HTML, CSS e JS do site
├── .github/workflows/  # Configuração do GitHub Actions (Pipeline)
├── Dockerfile          # Instruções de build da imagem
└── README.md           # Documentação do projeto
🐳 Dockerização
A imagem foi otimizada para ser leve e segura. Um ponto importante foi a configuração do comando de inicialização do Nginx para garantir que o container permaneça em execução:

Dockerfile
CMD ["nginx", "-g", "daemon off;"]
Como rodar localmente:
Build:

Bash
docker build -t meu-front-ci .
Run:

Bash
docker run -d -p 8080:80 --name container-front meu-front-ci
Acesse: http://localhost:8080

⚙️ Fluxo de CI/CD (GitHub Actions)
O pipeline configurado neste repositório executa as seguintes etapas a cada push na branch main:

Checkout: Baixa o código no servidor do GitHub.

Build: Verifica se o Dockerfile está correto e gera a imagem.

Smoke Test: Sobe o container e realiza um curl para garantir que o serviço está respondendo com HTTP 200 OK.

💡 Aprendizados
Durante este projeto, aprofundei meus conhecimentos em:

Gerenciamento de ciclo de vida de containers (Exited vs Up).

Debug de logs do Docker para resolução de erros de sintaxe.

Mapeamento de portas e redes local
