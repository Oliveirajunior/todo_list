'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          description: 'Almoçar fora'
        },
        {
          description: 'Lavar a louça'
        },
        {
          description: 'Estudar programação'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {})
  }
}
