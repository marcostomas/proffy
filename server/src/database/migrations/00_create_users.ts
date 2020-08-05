import Knex from 'knex';

/*
    O Knex procura pelos métodos up e down,
        portanto esse deve ser o nome das functions.
*/

export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}