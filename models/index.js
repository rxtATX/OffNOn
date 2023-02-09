const Log = require('./log');
const User = require('./user');
const Ticket = require('./ticket');

Log.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Ticket, {
    foreignKey: 'ticket_id',
    onDelete: 'CASCADE'
});

Ticket.belongsTo(Log, {
    foreignKey: 'log_id',
});


module.exports = { Log, User, Ticket };