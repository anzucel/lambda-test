const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Country = sequelize.define('country', {
        country_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },  
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preffix: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Country;
};
