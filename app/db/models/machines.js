const { DataTypes } = require('sequelize');

const Machine = sequelize.define('Machine', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dockerFile: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'docker_file'
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'ip_address'
  },
  osType: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'os_type'
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: DataTypes.NOW
  },
  deletedAt: {
    type: DataTypes.DATE,
    field: 'deleted_at'
  }
}, {
  tableName: 'machines',
  freezeTableName: true,
  timestamps: true,
  charset: 'utf8',   // Character set for UTF-8 encoding
  collate: 'utf8_unicode_ci',  // More accurate collation for international text
  paranoid: true,
  underscored: true
});

module.exports = Machine;
