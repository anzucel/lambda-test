const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const File = sequelize.define('file', {
        file_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },  
        src: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        level_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        album_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return File;
};
