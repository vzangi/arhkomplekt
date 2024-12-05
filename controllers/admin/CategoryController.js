const categoryHelper = require('../../helpers/CategoryHelper'); 

class CategoryController {
  async index(req, res) {
    res.locals.items = await categoryHelper.getCategories()
    res.render('pages/admin/categories');
  }

  async add(req, res) {
    await categoryHelper.addCategory(req.body)
    res.redirect('/admin/categories');
  }

  async edit(req, res) {
    const { id, ...data } = req.body
    await categoryHelper.editCategory(id, data)
    res.redirect('/admin/categories');
  }

  async remove(req, res) {
    const { id } = req.body
    await categoryHelper.removeCategory(id);
    res.redirect('/admin/categories');
  }
}

module.exports = new CategoryController()