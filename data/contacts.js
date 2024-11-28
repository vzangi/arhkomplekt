const config = require('../models').Config

const contacts = {};

(async function () {
  const confs = await config.findAll({raw: true});
  for (const element of confs) {
    contacts[element.name] = element.value
  }
})();

module.exports = contacts