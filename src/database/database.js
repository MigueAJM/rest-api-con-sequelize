import Sequelize from 'sequelize'

export const sequelize = new Sequelize('sequelize', 'postgres', '', {
    host: '127.0.0.1',
    dialect: 'postgres'
})