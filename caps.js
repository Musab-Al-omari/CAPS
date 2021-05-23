'use strict';

require('dotenv').config()
const events = require('./events')
const faker = require('faker');
require('./driver')


setInterval(() => {
  let obj = {
    storeName: process.env.storeName,
    orderId: faker.datatype.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.city()
  }
  events.emit('pick up', obj)
}, 5000)