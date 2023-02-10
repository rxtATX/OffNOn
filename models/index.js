const Log = require('./log');
const User = require('./user');
const Ticket = require('./ticket');

User.hasMany(Ticket, {
    foreignKey: 'client_id',
    onDelete: 'CASCADE'
});

User.hasMany(Ticket, {
    foreignKey: 'tech_id',
    onDelete: 'CASCADE'
})

Ticket.belongsTo(User, {
    foreignKey: 'client_id',
});

Ticket.belongsTo(User, {
    foreignKey: 'tech_id',
})

Log.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Log, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Log.belongsTo(Ticket, {
    foreignKey: 'log_id',
});

Ticket.hasMany(Log, {
    foreignKey: 'log_id',
    onDelete: 'CASCADE'
});


module.exports = { Log, User, Ticket };