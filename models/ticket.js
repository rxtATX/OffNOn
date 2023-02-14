const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Log = require ('./log')

class Ticket extends Model {}

Ticket.init(
    {
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        tech_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        ticket_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticket_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        date_updated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Open'
        }, 
        urgency: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        hooks : {
            afterCreate: async (newLogData) => {
                try {
                    newLogData = await Log.create({
                        user_id: newLogData.client_id,
                        ticket_id: newLogData.id,
                        log_text: 'Created'
                    })

                }
                catch (err) {
                    console.log(err)
                }

                return newLogData
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ticket'
    }
);

module.exports = Ticket;