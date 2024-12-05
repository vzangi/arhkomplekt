const portfolioHelper = require('../../helpers/PortfolioHelper'); 

class PortfolioController {
  async index(req, res) {
    const { id } = req.params;
    res.locals.items = await portfolioHelper.getPortfolios();
    res.render('pages/admin/portfolio');
  }

  async add(req, res) {
    const item = await portfolioHelper.addPortfolioItem(req.body)
    res.redirect(`/admin/portfolio`);
  }

  async edit(req, res) {
    const { id, ...data } = req.body
    const item = await portfolioHelper.editPortfolioItem(id, data)
    res.redirect(`/admin/portfolio`);
  }

  async remove(req, res) {
    const { id } = req.body
    await portfolioHelper.removePortfolioItem(id);
    res.redirect(`/admin/portfolio`);
  }
}

module.exports = new PortfolioController()