const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('talleres', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
        },
        color_persona: {
            type: DataTypes.STRING
        },
        nota: {
            type: DataTypes.STRING,
        },
        talle: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};