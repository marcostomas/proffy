import Knex from 'knex';

/*
    O Knex procura pelos métodos up e down,
        portanto esse deve ser o nome das functions.

    1. Gera uma chave estrangeira. O CASCADE gera uma
        alteração em todos os elementos da tabela.
*/

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        // 1. ↓
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}