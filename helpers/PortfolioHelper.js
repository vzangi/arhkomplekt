const portfolioModel = require('../models').Portfolio;

class PortfolioHelper {
  portfolios = null;

  async getPortfolios() {
    if (!this.portfolios) {
      this.portfolios = await portfolioModel.findAll({ 
        raw: true, 
      });
    }
    return this.portfolios;
  }

  async findItemByLink(link) {
    const item = await portfolioModel.findOne({ 
      where: { link },
      raw: true
    });
    return item;
  }
}

module.exports = new PortfolioHelper();