const blogHelper = require('../../helpers/BlogHelper'); 

class BlogController {
  async index(req, res) {
    const { id } = req.params;
    res.locals.category = await blogHelper.getCategoryById(id)
    res.locals.items = await blogHelper.getItemsOfCategory(id)
    res.render('pages/admin/blogitem');
  }

  async add(req, res) {
    const item = await blogHelper.addBlogItem(req.body)
    res.redirect(`/admin/blog/${item.blogCategoryId}`);
  }

  async edit(req, res) {
    const { id, ...data } = req.body
    const item = await blogHelper.editBlogItem(id, data)
    res.redirect(`/admin/blog/${item.blogCategoryId}`);
  }

  async remove(req, res) {
    const { id } = req.body
    const blogCategoryId = await blogHelper.removeBlogItem(id);
    res.redirect(`/admin/blog/${blogCategoryId}`);
  }
}

module.exports = new BlogController()