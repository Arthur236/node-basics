const emitter = require('./sendEmail');

emitter.on('emailEvent', (message) => {
  console.log('Email: ', message);
});

emitter.emit('emailEvent', 'Send an email to a user');
