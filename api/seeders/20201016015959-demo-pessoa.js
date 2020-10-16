'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', [
      {
      nome: 'João do Feijão',
      ativo: true,
      email: 'joao@feijao.com',
      role: 'agricultor',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nome: 'Maria das Couves',
        ativo: true,
        email: 'maria@couves.com',
        role: 'agricultora',
        createdAt: new Date(),
        updatedAt: new Date(),
        }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pessoas', null, {});
  }
};
