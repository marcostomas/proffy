import knex from 'knex';
import path from 'path';


/* 
    migrations → controlam a versão do banco de dados.

    Caso uma pessoa pegue o banco, basta apenas executar
        as migrations.

    __dirname → retorna o diretório ques está o arquivo 
        que executa o dirname, no caso, o diretório retornado
        será o database.
*/

const db = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite') 
    },
    useNullAsDefault: true,
});

export default db;