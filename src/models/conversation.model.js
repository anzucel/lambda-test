const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Conversation = sequelize.define('conversation', {
        conversation_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },  
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        receptor_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Conversation;
};
