const blogHelper = require('../../helpers/BlogHelper'); 

class BlogController {
  async index(req, res) {
    res.locals.items = await blogHelper.getBlogCategories()
    res.render('pages/admin/blog');
  }

  async add(req, res) {
    await blogHelper.addBlogCategory(req.body)
    res.redirect('/admin/blog');
  }

  async edit(req, res) {
    const { id, ...data } = req.body
    await blogHelper.editBlogCategory(id, data)
    res.redirect('/admin/blog');
  }

  async remove(req, res) {
    const { id } = req.body
    await blogHelper.removeBlogCategory(id);
    res.redirect('/admin/blog');
  }
}

module.exports = new BlogController()