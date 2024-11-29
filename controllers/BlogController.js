const { blogCategories, findPostByLink } = require('../data/blog');
const blogHelper = require('../helpers/BlogHelper');

class BlogController {

  async blogPage(req, res) {
    const blogCategories = await blogHelper.getCategories();
    res.locals.blog = blogCategories;
    res.render('pages/blog');
  }

  async blogItem(req, res, next) {
    const { link } = req.params;
    const blogItem = await blogHelper.findPostByLink(link);
    if (!blogItem) return next();

    const blogCategories = await blogHelper.getCategories();

    res.locals.blogItem = blogItem;
    res.locals.category = blogItem.BlogCategory;
    res.locals.blog = blogCategories;

    res.locals.seo = {
      title: blogItem.title,
    }

    if (blogItem.description) {
      res.locals.seo.description = blogItem.description
    }

    res.render('pages/blogItem');
  }
}

module.exports = new BlogController()