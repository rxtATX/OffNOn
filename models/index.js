const Log = require('./log');
const User = require('./user');
const Ticket = require('./ticket');

User.hasMany(Ticket, {
    foreignKey: 'client_id',
    as: 'client',
    onDelete: 'CASCADE'
});

User.hasMany(Ticket, {
    foreignKey: 'tech_id',
    as: 'tech',
    onDelete: 'CASCADE'
})

Ticket.belongsTo(User, {
    foreignKey: 'client_id',
    as: 'client'
});

Ticket.belongsTo(User, {
    foreignKey: 'tech_id',
    as: 'tech'
})

Log.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Log, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Log.belongsTo(Ticket, {
    foreignKey: 'ticket_id',
});

Ticket.hasMany(Log, {
    foreignKey: 'ticket_id',
    onDelete: 'CASCADE'
});


module.exports = { Log, User, Ticket };