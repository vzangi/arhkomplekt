const reviewHelper = require('../helpers/ReviewHelper');

class ReviewController {
  async reviewPage(req, res) {
    const reviewsItems = await reviewHelper.getReviews()
    res.locals.reviewsItems = reviewsItems;
    res.render('pages/reviews');
  }

  async reviewItem(req, res, next) {
    const { link } = req.params;
    const item = await reviewHelper.findItemByLink(link);
    if (!item) return next();
    
    res.locals.item = item;
    res.locals.seo = {
      title: item.title,
    }
    if (item.description) {
      res.locals.seo.description = item.description
    }
    res.render('pages/reviewItem');
  }
}

module.exports = new ReviewController()