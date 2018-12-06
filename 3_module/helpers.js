const object = require('./helpers_lib');

module.exports.title = 'NODE';

module.exports.title2 = 'NODE 2';

module.exports.hello = () => {
  console.log('Yoh!!!!!!!');
};

console.log(module.exports.title2);
console.log(module.exports.hello());
console.log(object.cal(9, 78));
