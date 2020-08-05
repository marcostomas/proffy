import Knex from 'knex';

/*
    O Knex procura pelos métodos up e down,
        portanto esse deve ser o nome das functions.

    1. Gera uma chave estrangeira. O CASCADE gera uma
        alteração em todos os elementos da tabela.
*/

export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        // 1. ↓
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}