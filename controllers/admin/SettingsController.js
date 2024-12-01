const configHelper = require('../../helpers/ConfigHelper'); 

class SettingsController {
  async index(req, res) {
    res.locals.configs = await configHelper.get()
    res.render('pages/admin/settings');
  }

  async edit(req, res) {
    const { id, value } = req.body
    await configHelper.edit(id, value)
    res.redirect('/admin/settings');
  }
}

module.exports = new SettingsController()