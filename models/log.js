const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Log extends Model {}

Log.init(

    // Explore adding a tech_id in order to display who made the log entry
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ticket',
                key: 'id'
            }
        },
        log_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'log'
    }
);

module.exports = Log;