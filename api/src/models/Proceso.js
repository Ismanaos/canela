const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('proceso', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_talleres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        talle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nota: {
            type: DataTypes.STRING
        }
    });
};