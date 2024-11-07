const { reviewsItems, findReviewByLink } = require('../data/reviews');

class ReviewController {
  async reviewPage(req, res) {
    res.locals.reviewsItems = reviewsItems;
    res.render('pages/reviews');
  }

  async reviewItem(req, res, next) {
    const { link } = req.params;
    const data = findReviewByLink(link);
    if (!data) return next();
    const item = data.finded;
    
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