const userModel = require('../models').User

class AdminController {

  async isAuth(req, res, next) {
    if (req.session.auth) {
      res.locals.user = req.session.auth
      return next();
    }
    res.render('admin/login');
  }

  async index(req, res) {
    res.send('ok');
  }

  async login(req, res) {
    const { login, password } = req.body;

    const user = await userModel.findOne({
      where: {
        login, password
      },
      attributes: ['name', 'role'],
      raw: true
    })

    if (user) {
      req.session.auth = user
    } 

    res.redirect('/admin');
  }

  async logout(req, res) {
    req.session.auth = null;
    res.redirect('/admin');
  }

}

module.exports = new AdminController()