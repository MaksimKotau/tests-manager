'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('machines', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'Unique identifier for each machine.',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        comment: 'A human-readable name for the machine.',
      },
      docker_file: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: 'The Dockerfile content or path to the Dockerfile for the machine.',
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: 'The current status of the machine (e.g., "available", "busy", "offline").',
      },
      ip_address: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: 'The IP address of the machine (if applicable).',
      },
      os_type: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: 'Operating system of the machine (e.g., "AlmaLinux", "Ubuntu", "Debian").',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        comment: 'Timestamp when the machine record was created.',
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        comment: 'Timestamp for the last update to the machine record.',
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'Timestamp for soft deletion (if paranoid mode is enabled).',
      },
    }, {
      charset: 'utf8',               // Use UTF-8 character set
      collate: 'utf8_unicode_ci',     // Use Unicode collation
      freezeTableName: true,          // Prevent Sequelize from pluralizing table name
      paranoid: true,                 // Enable paranoid mode for soft-deletes
      underscored: true,              // Use snake_case for columns
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('machines');
  }
};
