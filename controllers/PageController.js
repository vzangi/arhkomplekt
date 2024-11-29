const categories = require('../data/categories');
const seoHelper = require('../helpers/SeoHelper');
const configHelper = require('../helpers/ConfigHelper');
const blogHelper = require('../helpers/BlogHelper');

class PageController {

  async setupMiddleware(req, res, next) {
    res.locals.categories = categories;
    res.locals.contacts = await configHelper.getContacts();
    res.locals.seo = await seoHelper.getPageSeo(req.path);

    next();
  }

  async mainPage(req, res) {
    const blogCategories = await blogHelper.getCategories();
    res.locals.blog = blogCategories;
    res.render('pages/main');
  }

  async deliveryPage(req, res) {
    res.render('pages/delivery');
  }

  async contactsPage(req, res) {
    res.render('pages/contacts');
  }

  async aboutPage(req, res) {
    res.render('pages/about');
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