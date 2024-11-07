const { blogCategories, findPostByLink } = require('../data/blog');

class BlogController {

  async blogPage(req, res) {
    res.locals.blog = blogCategories;
    res.render('pages/blog');
  }

  async blogItem(req, res, next) {
    const { link } = req.params;
    const data = findPostByLink(link);
    if (!data) return next();
    const { blogItem, category } = data;
    
    res.locals.blogItem = blogItem;
    res.locals.category = category;
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