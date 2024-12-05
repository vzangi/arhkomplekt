const db = require('../../models')

class AuthController {

  async isAuth(req, res, next) {
    if (req.session.auth) {
      res.locals.user = req.session.auth;
      return next();
    }
    res.render('pages/admin/login');
  }

  async isAdmin(req, res, next) {
    const { user } = res.locals;
    if (user && user.role == 1) return next();
    next(new Error('no permissions'))
  }

  async index(req, res) {
    res.render('pages/admin/main');
  }

  async login(req, res) {
    const { login, password } = req.body;

    const user = await db.User.findOne({
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

module.exports = new AuthController()