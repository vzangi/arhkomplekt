const categoryHelper = require('../../helpers/CategoryHelper'); 

class ItemController {
  async index(req, res) {
    const { id } = req.params;
    res.locals.category = await categoryHelper.getCategoryById(id)
    res.locals.items = await categoryHelper.getItemsByCategoryid(id)
    res.render('pages/admin/items');
  }

  async add(req, res) {
    const item = await categoryHelper.addItem(req.body)
    res.redirect(`/admin/categories/${item.categoryId}`);
  }

  async edit(req, res) {
    const { id, ...data } = req.body
    const item = await categoryHelper.editItem(id, data)
    res.redirect(`/admin/categories/${item.categoryId}`);
  }

  async remove(req, res) {
    const { id } = req.body
    const categoryId = await categoryHelper.removeItem(id);
    res.redirect(`/admin/categories/${categoryId}`);
  }
}

module.exports = new ItemController()