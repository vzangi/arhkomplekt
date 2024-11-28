const configModel = require('../models').Config

class ConfigHelper {
  contacts = null;

  async getContacts() {
    if (!this.contacts) {
      this.contacts = {}
      const confs = await configModel.findAll({ raw: true });
      for (const element of confs) {
        this.contacts[element.name] = element.value
      }
    }
    return this.contacts;
  }
}

module.exports = new ConfigHelper();