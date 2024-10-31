const categories = require('../data/categories');
const seo = require('../data/seo');
const contacts = require('../data/contacts');
const { blogCategories, findPostByLink } = require('../data/blog');

class PageController {

  async setupMiddleware(req, res, next) {
    res.locals.categories = categories;
    res.locals.contacts = contacts;
    res.locals.seo = seo.find(s => s.page == req.path);

    next();
  }

  async mainPage(req, res) {
    res.locals.blog = blogCategories;
    res.render('pages/main');
  }

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

  async contactsPage(req, res) {
    res.render('pages/contacts');
  }

  async categoryItem(req, res, next) {
    const categoryLink = req.params.category;
    const category = res.locals.categories.find(
      cat => cat.url.substr(1) == categoryLink
    );
    if (!category) return next();
    res.locals.seo = {
      title: category.name
    }
    res.render('pages/category', { category });
  }
}

module.exports = new PageController()