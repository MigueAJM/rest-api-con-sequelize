import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Task } from './Task.js'

export const Projects = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
})

Projects.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

Task.belongsTo(Projects, {
    foreignKey: 'projectId',
    targetId: 'id'
})