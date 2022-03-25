const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Hotdog extends Model { }

Hotdog.init({
  name: DataTypes.STRING,
  description: DataTypes.STRING
}, { sequelize, modelName: 'hotdog' })

module.exports = Hotdog
