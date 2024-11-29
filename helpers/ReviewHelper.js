const reviewModel = require('../models').Review;

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
}

module.exports = new ReviewHelper();