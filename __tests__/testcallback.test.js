'use strict';
require('jest');
const faker = require('faker');
let logger = require('../driver').logger



describe('unit tests for each event handler function ', () => {
  jest.spyOn(global.console, 'log');
  it('main console log in my js', () => {
    let obj = {
      storeName: process.env.storeName || 'musabStore',
      orderId: faker.datatype.uuid(),
      customerName: faker.name.findName(),
      address: faker.address.city()
    }
    logger('anything', obj)
    expect(console.log).toHaveBeenCalled();
  });


});