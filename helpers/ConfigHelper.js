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

  async get() {
    return await configModel.findAll({
      attributes: ['id', 'name', 'value'],
      raw: true
    });
  }

  async add(data) {
    await configModel.create(data)
  }

  async edit(id, value) {
    await configModel.update({
      value
    }, {
      where: { id }
    })
    this.contacts = null;
  }
}

module.exports = new ConfigHelper();