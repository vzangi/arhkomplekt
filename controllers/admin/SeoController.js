const seoHelper = require('../../helpers/SeoHelper'); 

class SeoController {
  async index(req, res) {
    res.locals.seos = await seoHelper.get()
    res.render('pages/admin/seo');
  }

  async add(req, res) {
    await seoHelper.add(req.body)
    res.redirect('/admin/seo');
  }

  async edit(req, res) {
    const { id, ...data } = req.body
    await seoHelper.edit(id, data)
    res.redirect('/admin/seo');
  }

  async remove(req, res) {
    const { id } = req.body
    await seoHelper.remove(id);
    res.redirect('/admin/seo');
  }
}

module.exports = new SeoController()