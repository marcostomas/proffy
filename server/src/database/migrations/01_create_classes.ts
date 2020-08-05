import Knex from 'knex';

/*
    O Knex procura pelos métodos up e down,
        portanto esse deve ser o nome das functions.

    1. Gera uma chave estrangeira. O CASCADE gera uma
        alteração em todos os elementos da tabela.
*/

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        // 1. ↓
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}