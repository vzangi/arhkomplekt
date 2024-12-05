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

  async addReviewsItem(data) {
    await reviewModel.create(data)
    this.reviews = null
  }

  async editReviewsItem(id, data) {
    await reviewModel.update(data, { where: { id } })
    this.reviews = null
  }

  async removeReviewsItem(id, data) {
    await reviewModel.destroy({ where: { id } });
    this.reviews = null
  }
}

module.exports = new ReviewHelper();