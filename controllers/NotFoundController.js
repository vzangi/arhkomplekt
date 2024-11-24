class NotFoundController {

  async notFound(req, res) {
    res.status(404);
    res.render('pages/notfound');
  }
}

module.exports = new NotFoundController()