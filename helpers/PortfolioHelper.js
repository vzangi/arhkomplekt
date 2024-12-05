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

  async addPortfolioItem(data) {
    await portfolioModel.create(data)
    this.portfolios = null
  }

  async editPortfolioItem(id, data) {
    await portfolioModel.update(data, { where: { id } })
    this.portfolios = null
  }

  async removePortfolioItem(id, data) {
    await portfolioModel.destroy({ where: { id } });
    this.portfolios = null
  }
}

module.exports = new PortfolioHelper();