const reviewModel = require('../models').Review;
const sitemap = require('./SitemapHelper');

class ReviewHelper {
  reviews = null;

  async getReviews() {
    if (!this.reviews) {
      this.reviews = await reviewModel.findAll({ 
        raw: true, 
      });
    }
    return this.reviews;
  }

  async findItemByLink(link) {
    const item = await reviewModel.findOne({ 
      where: { link },
      raw: true
    });
    return item;
  }

  async addReviewsItem(data) {
    await reviewModel.create(data);
    this.clearReviewsCache();
  }

  async editReviewsItem(id, data) {
    await reviewModel.update(data, { where: { id } });
    this.clearReviewsCache();
  }

  async removeReviewsItem(id, data) {
    await reviewModel.destroy({ where: { id } });
    this.clearReviewsCache();
  }

  clearReviewsCache() {
    this.reviews = null;
    sitemap.regenerate();
  }
}

module.exports = new ReviewHelper();