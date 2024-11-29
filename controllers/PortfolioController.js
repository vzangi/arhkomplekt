const portfolioHelper = require('../helpers/PortfolioHelper');

class PortfolioController {
  async portfolioPage(req, res) {
    res.locals.portfolioItems = await portfolioHelper.getPortfolios();
    res.render('pages/portfolio');
  }

  async portfolioItem(req, res, next) {
    const { link } = req.params;
    const item = await portfolioHelper.findItemByLink(link);
    if (!item) return next();
    
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