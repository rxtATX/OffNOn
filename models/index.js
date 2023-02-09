const Log = require('./log');
const User = require('./user');
const Ticket = require('./ticket');

Log.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Ticket, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Ticket.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { Log, User, Ticket };