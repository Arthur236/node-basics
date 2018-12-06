const events = require('2_custom_events/events');

const emitter = new events.EventEmitter();

emitter.on('newEvent', (message) => {
  console.log('Message: ', message);
});

emitter.emit('newEvent', 'This is an event');
