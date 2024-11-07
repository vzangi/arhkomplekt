const { portfolioItems, findItemByLink } = require('../data/portfolio');

class PortfolioController {
  async portfolioPage(req, res) {
    res.locals.portfolioItems = portfolioItems;
    res.render('pages/portfolio');
  }

  async portfolioItem(req, res, next) {
    const { link } = req.params;
    const data = findItemByLink(link);
    if (!data) return next();
    const item = data.finded;
    
    res.locals.item = item;
    res.locals.seo = {
      title: item.title,
    }
    if (item.description) {
      res.locals.seo.description = item.description
    }
    res.render('pages/portfolioItem');
  }
}

module.exports = new PortfolioController()