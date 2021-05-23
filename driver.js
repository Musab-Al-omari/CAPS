require('dotenv').config()
const events = require('./events');


events.on('pick up', pickupHandler)
events.on('in-transit', transitHandler)
events.on('delivered', deliveredHandler)


function pickupHandler(obj) {
  logger('pickup', obj)

  // the code run 100%
  setTimeout(functionOne, 1000, obj)
  setTimeout(functionTow, 4000, obj)
    //------------------------------------------------------------------

  // the first line run but the second will give an error duo to "if u invoke the functionOne in side the setTimeout "
  //   setTimeout(functionOne(obj), 1000)         it will return undefine so if u wand to send the obj sind it as a 3ed param inside set time out
  //   setTimeout(functionTow(obj), 4000)

}


function functionOne(obj) {
  console.log(`DRIVER: picked up ${obj.orderId}`);
  events.emit('in-transit', obj)

}

function transitHandler(obj) {
  logger('in-transit', obj)

}

function functionTow(obj) {

  console.log(`DRIVER: delivered up ${obj.orderId}`);
  console.log(`VENDOR: Thank you for delivering ${obj.orderId}`);
  events.emit('delivered', obj)


}

function logger(string, obj) {
  console.log(`Event`, {
    event: string,
    time: new Date(),
    payload: obj
  });
}



function deliveredHandler(obj) {
  logger('delivered', obj)

}
module.exports = {
  events: events,
  logger: logger,
}