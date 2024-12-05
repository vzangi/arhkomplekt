const reviewHelper = require('../../helpers/ReviewHelper'); 

class ReviewsController {
  async index(req, res) {
    const { id } = req.params;
    res.locals.items = await reviewHelper.getReviews();
    res.render('pages/admin/reviews');
  }

  async add(req, res) {
    const item = await reviewHelper.addReviewsItem(req.body)
    res.redirect(`/admin/reviews`);
  }

  async edit(req, res) {
    const { id, ...data } = req.body
    const item = await reviewHelper.editReviewsItem(id, data)
    res.redirect(`/admin/reviews`);
  }

  async remove(req, res) {
    const { id } = req.body
    await reviewHelper.removeReviewsItem(id);
    res.redirect(`/admin/reviews`);
  }
}

module.exports = new ReviewsController()