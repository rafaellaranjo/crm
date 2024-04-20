# crm

Para inicializar o projeto, siga as etapas abaixo:

1. Execute o seguinte comando para instalar as dependências com o Yarn:

yarn install

2. Crie a pasta "uploads" na raiz do projeto para armazenar uploads de arquivos.

3. Crie o arquivo `ormconfig.json` na raiz do projeto para configurar o acesso do TypeORM ao banco de dados usando o seguinte código:

```json
{
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "docker",
"database": "timetable_psycho",
"entities": [ "./src/models/**/typeorm/entities/*.ts" ],
"migrations": [ "./src/shared/typeorm/migrations/*.ts" ],
"cli": { "migrationsDir": "./src/shared/typeorm/migrations" }
}

Certifique-se de ajustar as configurações, como host, porta, usuário, senha e nome do banco de dados de acordo com as configurações do seu ambiente.

Agora, o projeto está configurado e pronto para ser executado. Certifique-se de que o PostgreSQL esteja instalado e em execução, pois o arquivo de configuração ormconfig.json está definido para se conectar a um banco de dados PostgreSQL local.

Lembre-se de que você deve ajustar as configurações no arquivo `ormconfig.json` conforme necessário para corresponder às configurações do seu ambiente de desenvolvimento.
