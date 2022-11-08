const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Heart = sequelize.define('heart', {
        heart_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },  
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ref_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Heart;
};
