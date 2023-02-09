const sequelize = require('../config/connection');
const { User, Ticket, Log } = require('../models');

const userData = require('./userData.json');
const ticketData = require('./ticketData.json');
const logData = require('./logData.json');

const seedDatabase = async () => {
  await sequelize.sync ({ force: true });

  await User.bulkCreate(userData);
  await Ticket.bulkCreate(ticketData);
  await Log.bulkCreate(logData);

  console.log("~* Database Seeded! *~")
  process.exit(0)
}

seedDatabase();